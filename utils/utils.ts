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
      if (correctCount(word, guess, i) == wordOccurances) {
        return TileState.ABSENT;
      } else {
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

function correctCount(word: string, guess: string, i: number): number {
  const cc = guess.split("").reduce((acc, curr, index) => {
    return word[index] == guess[index] && word[index] == guess[i]
      ? acc + 1
      : acc;
    //return accumulator + currentValue + index;
  }, 0);
  return cc;
}
