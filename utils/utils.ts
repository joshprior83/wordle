import wordList from "../utils/5words.json";

const enum TileState {
  UNUSED = "unused",
  ABSENT = "absent",
  PRESENT = "present",
  CORRECT = "correct",
}

export function isValid(guess: string): boolean {
  const startTime = performance.now();
  const valid = wordList.includes(guess.toLowerCase());
  //console.log("guess", guess.toLowerCase());
  const endTime = performance.now();
  //console.log("milliseconds for valid: ", endTime - startTime);
  return valid;
}
