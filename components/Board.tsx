import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Tile } from "./Tile";
import { tileState } from "@/utils/utils";
import { FlipTile } from "./FlipTile";

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
        <ThemedView key={index} style={styles.row} accessibilityLabel="tileRow">
          {guesses[index]
            .split("")
            .map((letter, i) =>
              index === guesses.length - 1 ? (
                <FlipTile
                  key={i}
                  letter={letter}
                  tileState={tileState(word, guess, i)}
                  index={i}
                />
              ) : (
                <Tile
                  key={i}
                  letter={letter}
                  tileState={tileState(word, guess, i)}
                />
              )
            )}
        </ThemedView>
      ))}
      {/* Current Guess */}
      <ThemedView style={styles.row} accessibilityLabel="tileRow">
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
          <ThemedView
            key={index}
            style={styles.row}
            accessibilityLabel="tileRow"
          >
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
