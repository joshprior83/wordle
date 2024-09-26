import wordList from "../utils/5words.json";

export const enum TileState {
  UNUSED = "unused",
  ABSENT = "absent",
  PRESENT = "present",
  CORRECT = "correct",
}

export function isValid(guess: string): boolean {
  const startTime = performance.now();
  const valid = wordList.includes(guess.toLowerCase());
  const endTime = performance.now();
  //console.log("milliseconds for valid: ", endTime - startTime);
  return valid;
}

export function tileState(word: string, guess: string, i: number) {
  if (word[i] === guess[i]) {
    return TileState.CORRECT;
  }
  if (word.includes(guess[i])) {
    const guessOccurances = guess.split(guess[i]).length - 1;
    const wordOccurances = word.split(guess[i]).length - 1;
    if (guessOccurances <= wordOccurances) {
      return TileState.PRESENT;
    }
    if (occurance(guess, i) <= wordOccurances) {
      const nextIndex: number = guess.indexOf(
        guess[i],
        guess.indexOf(guess[i]) + 1
      );
      //if another instance after this one AND it is not correct
      if (nextIndex !== -1 && guess[i] !== word[nextIndex]) {
        return TileState.PRESENT;
      }
    } else {
      return TileState.ABSENT;
    }
  }
  return TileState.ABSENT;
}

function occurance(string: string, i: number): number {
  return string.substring(0, i + 1).split(string[i]).length - 1;
}
