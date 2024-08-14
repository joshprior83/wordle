import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Tile } from "./Tile";
import { tileState } from "@/utils/utils";
import uuid from "react-native-uuid";

interface BoardProps {
  word: string;
  guesses: string[];
  currentGuess: string;
}

export function Board({ word, guesses, currentGuess }: BoardProps) {
  const enum TileState {
    UNUSED = "unused",
    ABSENT = "absent",
    PRESENT = "present",
    CORRECT = "correct",
  }

  return (
    <ThemedView style={styles.container}>
      {/* existing Gussses */}
      {guesses.map((guess, index) => (
        <ThemedView key={uuid.v4().toString()} style={styles.row}>
          {guesses[index].split("").map((letter, i) => (
            <Tile
              key={uuid.v4().toString()}
              letter={letter}
              tileState={tileState(word, guess, i)}
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
