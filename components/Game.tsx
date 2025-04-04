import { StyleSheet } from "react-native";

import React, { useRef, useState } from "react";
import { ThemedView } from "@/components/ThemedView";

import { Keyboard } from "@/components/Keyboard";
import { Board } from "@/components/Board";
import { DefinitionModal } from "@/components/DefinitionModal";
import Toast from "react-native-root-toast";
import wordList from "../utils/5words.json";
import LottieView from "lottie-react-native";
import { defaultKeys, isValid } from "@/utils/utils";

interface GameProps {
  useWord?: string;
}

const toastConfig = {
  duration: Toast.durations.LONG,
  position: Toast.positions.TOP + 50,
  backgroundColor: "#fff",
  textColor: "#151718",
  animation: true,
  opacity: 0.9,
  accessibilityLabel: "",
};

const promptDelay: number = 1800;

export function Game({ useWord }: GameProps) {
  const word = useWord
    ? useWord
    : React.useMemo(() => {
        return wordList[
          Math.floor(Math.random() * wordList.length)
        ].toUpperCase();
      }, []);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<string>("PLAYING");
  const [definition, setDefinition] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const confettiRef = useRef<LottieView>(null);
  const [keys, setKeys] = useState<
    { key: string; row: number; style: string }[]
  >(JSON.parse(JSON.stringify(defaultKeys)));
  const enum KeyState {
    UNUSED = "unused",
    ABSENT = "absent",
    PRESENT = "present",
    CORRECT = "correct",
  }

  const handleKeyPress = (letter: string) => {
    if (gameStatus !== "WON") {
      if (letter === "ENTER") {
        handleEnter();
        return;
      }
      if (letter === "DEL") {
        handleDel();
        return;
      }
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + letter);
      }
    }
  };

  function handleEnter() {
    if (currentGuess === word) {
      setGameStatus("WON");
      if (confettiRef.current) {
        setTimeout(() => {
          confettiRef?.current?.play(0);
        }, 1800);
      }
    }
    //fetch definition after 5th guess
    if (guesses.length == 4 && currentGuess !== word) {
      fetchDefinition();
      Toast.show("Tap here for a hint", {
        ...toastConfig,
        duration: 6000,
        delay: promptDelay,
        onPress: () => {
          setModalVisible(true);
        },
        accessibilityLabel: "tap for hint",
      });
    }
    if (currentGuess.length !== 5 && guesses.length !== 6) {
      Toast.show("Not enough letters. 😐", {
        ...toastConfig,
        accessibilityLabel: "not enough letters",
      });
    }
    if (currentGuess.length === 5 && guesses.length !== 6) {
      if (isValid(currentGuess)) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");
        setTimeout(() => {
          updateKeyboard();
        }, 2000);
        if (guesses.length === 5 && currentGuess !== word) {
          Toast.show(
            `Better luck next time. The word was ${word}: \n ${definition} 🤯`,
            {
              ...toastConfig,
              delay: promptDelay,
              duration: 5000,
              accessibilityLabel: "game lost",
            }
          );
        }
      } else {
        Toast.show("Not in word list. 🤔", {
          ...toastConfig,
          accessibilityLabel: "Not in word list",
        });
      }
    }
  }

  function handleDel() {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
  }

  function updateKeyboard() {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === currentGuess[i]) {
        let newKeys = [...keys];
        let keyIndex = keys.findIndex((x) => x.key === currentGuess[i]);
        newKeys[keyIndex].style = KeyState.CORRECT;
        setKeys(newKeys);
      } else {
        if (word.includes(currentGuess[i])) {
          let newKeys = [...keys];
          let keyIndex = newKeys.findIndex((x) => x.key === currentGuess[i]);
          if (newKeys[keyIndex].style !== KeyState.CORRECT) {
            newKeys[keyIndex].style = KeyState.PRESENT;
            setKeys(newKeys);
          }
        } else {
          let newKeys = [...keys];
          let keyIndex = newKeys.findIndex((x) => x.key === currentGuess[i]);
          newKeys[keyIndex].style = KeyState.ABSENT;
          setKeys(newKeys);
        }
      }
    }
  }

  const fetchDefinition = async () => {
    if (!word.trim()) return;
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      if (data && Array.isArray(data) && data.length > 0) {
        setDefinition(data[0].meanings[0].definitions[0].definition);
      } else {
        setDefinition("Definition not found.");
      }
    } catch (err) {
      console.error(`error retrieving definition: ${err}`);
    }
  };

  function handleModalClose() {
    setModalVisible(false);
  }

  return (
    <>
      <DefinitionModal
        definition={definition}
        modalVisible={modalVisible}
        onKeyPress={() => setModalVisible(false)}
      />

      <ThemedView style={styles.main}>
        <Board word={word} guesses={guesses} currentGuess={currentGuess} />
        <LottieView
          style={styles.confetti}
          source={require("../assets/confetti.json")}
          ref={confettiRef}
          loop={false}
          webStyle={styles.confetti}
          testID="confetti"
        />
      </ThemedView>

      <ThemedView style={styles.keyboard}>
        <Keyboard keys={keys} onKeyPress={handleKeyPress} />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.75,
    zIndex: 1,
  },
  keyboard: {
    flexDirection: "row",
    flex: 0.25,
  },
  confetti: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: "none",
    height: "100%",
  },
});
