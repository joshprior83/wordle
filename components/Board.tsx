import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Tile } from "./Tile";
import uuid from "react-native-uuid";

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

  function tileState(guess: string, i: number) {
    if (word[i] === guess[i]) {
      return TileState.CORRECT;
    }
    if (word[i] !== guess[i]) {
      if (word.includes(guess[i])) {
        //count occurances of letter in word
        const guessOccurances = guess.split(guess[i]).length - 1;
        const wordOccurances = word.split(guess[i]).length - 1;
        if (guessOccurances == 2 && wordOccurances != 2) {
          const firstIndex = guess.indexOf(guess[i]);
          const secondIndex = guess.indexOf(guess[i], firstIndex + 1);
          //if this is the first index AND the second index is NOT correct = present
          if (firstIndex === i && word[secondIndex] === guess[secondIndex]) {
            return TileState.ABSENT;
          }
          //if this is the second index AND the first index is NOT correct = absent
          if (secondIndex === i && word[secondIndex] !== guess[firstIndex]) {
            return TileState.ABSENT;
          }
        }
        if (guessOccurances == 3 && wordOccurances != 3) {
          const firstIndex = guess.indexOf(guess[i]);
          const secondIndex = guess.indexOf(guess[i], firstIndex + 1);
          const thirdIndex = guess.indexOf(guess[i], secondIndex + 1);
          //if this is the first index AND the second index is NOT correct = present
          if (
            firstIndex === i &&
            (word[secondIndex] === guess[secondIndex] ||
              word[thirdIndex] === guess[thirdIndex])
          ) {
            return TileState.ABSENT;
          }
          //if this is the second index AND the other instances are NOT correct = absent
          if (
            secondIndex === i &&
            (word[firstIndex] !== guess[firstIndex] ||
              word[thirdIndex] !== guess[thirdIndex])
          ) {
            return TileState.ABSENT;
          }
          //if this is the third index AND the other instances are NOT correct = absent
          if (
            thirdIndex === i &&
            (word[secondIndex] !== guess[firstIndex] ||
              word[firstIndex] !== guess[firstIndex])
          ) {
            return TileState.ABSENT;
          }
        }
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
      {guesses.map((guess, index) => (
        <ThemedView key={uuid.v4().toString()} style={styles.row}>
          {guesses[index]
            //.padEnd(5)
            .split("")
            .map((letter, i) => (
              <Tile
                key={uuid.v4().toString()}
                letter={letter}
                tileState={tileState(guess, i)}
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
