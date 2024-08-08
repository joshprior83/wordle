import { StyleSheet } from "react-native";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ThemedView } from "@/components/ThemedView";

import { Keyboard } from "@/components/Keyboard";
import { Board } from "@/components/Board";
import Toast from "react-native-root-toast";
import wordList from "../utils/5words.json"; // assert { type: "json" };
import LottieView from "lottie-react-native";

export function Game() {
  const word = useMemo(() => {
    return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
  }, []);
  //const [word, setWord] = useState<string>("LANES");
  const [guesses, setGuesses] = useState<string[]>([]);
  //const [currentRow, setCurrentRow] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<string>("PLAYING");
  const confettiRef = useRef<LottieView>(null);
  const enum KeyState {
    UNUSED = "unused",
    ABSENT = "absent",
    PRESENT = "present",
    CORRECT = "correct",
  }

  const [keys, setKeys] = useState<
    { key: string; row: number; style: string }[]
  >([
    { key: "Q", row: 1, style: KeyState.UNUSED },
    { key: "W", row: 1, style: KeyState.UNUSED },
    { key: "E", row: 1, style: KeyState.UNUSED },
    { key: "R", row: 1, style: KeyState.UNUSED },
    { key: "T", row: 1, style: KeyState.UNUSED },
    { key: "Y", row: 1, style: KeyState.UNUSED },
    { key: "U", row: 1, style: KeyState.UNUSED },
    { key: "I", row: 1, style: KeyState.UNUSED },
    { key: "O", row: 1, style: KeyState.UNUSED },
    { key: "P", row: 1, style: KeyState.UNUSED },
    { key: "A", row: 2, style: KeyState.UNUSED },
    { key: "S", row: 2, style: KeyState.UNUSED },
    { key: "D", row: 2, style: KeyState.UNUSED },
    { key: "F", row: 2, style: KeyState.UNUSED },
    { key: "G", row: 2, style: KeyState.UNUSED },
    { key: "H", row: 2, style: KeyState.UNUSED },
    { key: "J", row: 2, style: KeyState.UNUSED },
    { key: "K", row: 2, style: KeyState.UNUSED },
    { key: "L", row: 2, style: KeyState.UNUSED },
    { key: "ENTER", row: 3, style: KeyState.UNUSED },
    { key: "Z", row: 3, style: KeyState.UNUSED },
    { key: "X", row: 3, style: KeyState.UNUSED },
    { key: "C", row: 3, style: KeyState.UNUSED },
    { key: "V", row: 3, style: KeyState.UNUSED },
    { key: "B", row: 3, style: KeyState.UNUSED },
    { key: "N", row: 3, style: KeyState.UNUSED },
    { key: "M", row: 3, style: KeyState.UNUSED },
    { key: "DEL", row: 3, style: KeyState.UNUSED },
  ]);

  useEffect(() => {
    if (gameStatus === "WON") {
      if (confettiRef.current) {
        confettiRef.current.play(0);
      }
    }
  }, [gameStatus]);

  const handleKeyPress = (letter: string) => {
    console.log(`log from Game - pressed ${letter}`);
    //set tile to letter pressed if under 5 letters in row
    //ignore letter presses after 5 letters
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
    }
    if (currentGuess.length !== 5) {
      Toast.show("Not enough letters.", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP + 50,
        backgroundColor: "#fff",
        textColor: "#151718",
        animation: true,
        opacity: 0.9,
      });
    }
    if (currentGuess.length === 5 && valid()) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");
      //setCurrentRow(currentRow + 1);
      updateKeyboard();
      if (guesses.length === 5) {
        Toast.show(`Better luck next time. The word was ${word}`, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP + 50,
          backgroundColor: "#fff",
          textColor: "#151718",
          animation: true,
          opacity: 0.9,
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
      }
      if (word[i] !== currentGuess[i]) {
        //update keyboard -> correct
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

  function valid() {
    const startTime = performance.now();
    //const firstLetter = word[0];
    const valid = wordList.includes(currentGuess.toLowerCase());
    console.log("currentGuess", currentGuess.toLowerCase());
    //console.log(wordsArr.includes(word));
    const endTime = performance.now();
    console.log("milliseconds for valid: ", endTime - startTime);
    console.log(valid);
    if (!valid) {
      Toast.show("Not in word list.", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP + 50,
        backgroundColor: "#fff",
        textColor: "#151718",
        animation: true,
        opacity: 0.9,
      });
    }
    return valid;
  }

  return (
    <>
      {gameStatus === "WON" && (
        <LottieView
          style={styles.confetti}
          source={require("../assets/confetti.json")}
          ref={confettiRef}
          loop={false}
          //autoPlay={true}
        />
      )}
      <ThemedView style={styles.main}>
        <Board word={word} guesses={guesses} currentGuess={currentGuess} />
      </ThemedView>
      <ThemedView style={styles.keyboard}>
        <Keyboard keys={keys} onKeyPress={handleKeyPress} />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.73,
    paddingTop: 50,
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
    height: "80%",
  },
});
