import wordList from "../utils/5words.json";

export const enum TileState {
  UNUSED = "unused",
  ABSENT = "absent",
  PRESENT = "present",
  CORRECT = "correct",
}

export const enum KeyState {
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

interface Key {
  key: string;
  row: number;
  style: string;
}

export const defaultKeys: Key[] = [
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
];
