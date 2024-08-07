import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Tile } from "./Tile";

export function Board({
  word,
  guesses,
  currentGuess,
}: {
  word: string;
  guesses: string[];
  currentGuess: string;
}) {
  const enum TileState {
    UNUSED = "unused",
    ABSENT = "absent",
    PRESENT = "present",
    CORRECT = "correct",
  }
  function tileState(word: string, letter: string, i: number) {
    if (word[i] === letter) {
      return TileState.CORRECT;
    }
    if (word[i] !== letter) {
      if (word.includes(letter)) {
        return TileState.PRESENT;
      } else {
        return TileState.ABSENT;
      }
    }
    return TileState.UNUSED;
  }

  return (
    <ThemedView style={styles.container}>
      {/* existing Gussses */}
      {guesses.map((val, index) => (
        <ThemedView key={index} style={styles.row}>
          {guesses[index]
            //.padEnd(5)
            .split("")
            .map((letter, index) => (
              <Tile
                key={index}
                letter={letter}
                tileState={tileState(word, letter, index)}
              />
            ))}
        </ThemedView>
      ))}
      {/* Current Guess */}
      <ThemedView style={styles.row}>
        {guesses.length !== 6 &&
          currentGuess
            .padEnd(5)
            .split("")
            .map((letter, index) => (
              <Tile key={index} letter={letter} tileState={TileState.UNUSED} />
            ))}
      </ThemedView>
      {/* Remaining guesses */}
      {guesses.length !== 6 &&
        [...Array(5 - guesses.length)].map((val, index) => (
          <ThemedView key={index} style={styles.row}>
            {""
              .padEnd(5)
              .split("")
              .map((letter, index) => (
                <Tile
                  key={index}
                  letter={letter}
                  tileState={TileState.UNUSED}
                />
              ))}
          </ThemedView>
        ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  row: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
  },
});
