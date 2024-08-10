import { isValid, tileState, TileState } from "@/utils/utils";

describe("isValid tests", () => {
  it(`word in list returns true`, () => {
    const word: string = "ANIME";
    expect(isValid(word)).toBe(true);
  });

  it(`word not in list returns true`, () => {
    const word: string = "ABCDE";
    expect(isValid(word)).toBe(false);
  });
});

describe("tileState single letter tests", () => {
  it(`correct letter returns correct`, () => {
    const word: string = "ANIME";
    const guess: string = "ABATE";
    const index: number = 0; //"A"
    expect(tileState(word, guess, index)).toBe(TileState.CORRECT);
  });

  it(`incorrect letter returns absent`, () => {
    const word: string = "ANIME";
    const guess: string = "ABATE";
    const index: number = 1; //"B"
    expect(tileState(word, guess, index)).toBe(TileState.ABSENT);
  });
});

describe("tileState 2 duplicate letters in guess with one instance in word tests", () => {
  it(`2 instances in guess, first instance is incorrect and second instance is correct - shows first instance absent and second correct`, () => {
    const word: string = "LANES";
    const guess: string = "SEALS";
    const firstIndex: number = 0; //"S"
    const secondIndex: number = 4; //"S"
    expect(tileState(word, guess, firstIndex)).toBe(TileState.ABSENT);
    expect(tileState(word, guess, secondIndex)).toBe(TileState.CORRECT);
  });

  it(`2 instances in guess, fist instance shows present when another instance is also present`, () => {
    const word: string = "LANES";
    const guess: string = "BOSSY";
    const index: number = 2; //"S"
    expect(tileState(word, guess, index)).toBe(TileState.PRESENT);
  });

  it(`second instance shows absent when another instance is present and there are is only one occurance in word `, () => {
    const word: string = "LANES";
    const guess: string = "BOSSY";
    const firstIndex: number = guess.indexOf("S");
    const secondIndex: number = guess.indexOf("S", firstIndex + 1);
    expect(tileState(word, guess, firstIndex)).toBe("present");
    expect(tileState(word, guess, secondIndex)).toBe(TileState.ABSENT);
  });
});

describe("tileState 2 duplicate letters in guess with 2 instances in word tests", () => {
  it(`both instances incorrect returns present for both`, () => {
    const word: string = "SALES";
    const guess: string = "BOSSY";
    const firstIndex: number = guess.indexOf("S");
    const secondIndex: number = guess.indexOf("S", firstIndex + 1);
    expect(tileState(word, guess, firstIndex)).toBe(TileState.PRESENT);
    expect(tileState(word, guess, secondIndex)).toBe(TileState.PRESENT);
  });

  it(`both instances in correct spot returns correct for both`, () => {
    const word: string = "SALES";
    const guess: string = "SITES";
    const firstIndex: number = guess.indexOf("S");
    const secondIndex: number = guess.indexOf("S", firstIndex + 1);
    expect(tileState(word, guess, firstIndex)).toBe(TileState.CORRECT);
    expect(tileState(word, guess, secondIndex)).toBe(TileState.CORRECT);
  });

  it(`first instance correct and second instance incorrect returns 1st:correct, 2nd: present`, () => {
    const word: string = "SALES";
    const guess: string = "SALSA";
    const firstIndex: number = guess.indexOf("S");
    const secondIndex: number = guess.indexOf("S", firstIndex + 1);
    expect(tileState(word, guess, firstIndex)).toBe(TileState.CORRECT);
    expect(tileState(word, guess, secondIndex)).toBe(TileState.PRESENT);
  });
});

describe("tileState 3 duplicate letters in guess with 1 instance in word tests", () => {
  it(`3 occurances in guess, 1 in word, first instance is correct and 2nd and 3rd are incorrect returns 1:correct, 2:absent, and 3:absent`, () => {
    const word: string = "SALTY";
    const guess: string = "SASSY";
    const firstIndex: number = guess.indexOf("S");
    const secondIndex: number = guess.indexOf("S", firstIndex + 1);
    const thirdIndex: number = guess.indexOf("S", secondIndex + 1);
    expect(tileState(word, guess, firstIndex)).toBe(TileState.CORRECT);
    expect(tileState(word, guess, secondIndex)).toBe(TileState.ABSENT);
    expect(tileState(word, guess, thirdIndex)).toBe(TileState.ABSENT);
  });
});

describe("tileState 3 duplicate letters in guess with 2 instance in word tests", () => {
  it(`3 occurances in gues, 2 in word, first instance is correct and 2nd and 3rd are incorrect returns 1:correct, 2:present, and 3:absent`, () => {
    const word: string = "SALES";
    const guess: string = "SASSY";
    const firstIndex: number = guess.indexOf("S");
    const secondIndex: number = guess.indexOf("S", firstIndex + 1);
    const thirdIndex: number = guess.indexOf("S", secondIndex + 1);
    expect(tileState(word, guess, firstIndex)).toBe(TileState.CORRECT);
    expect(tileState(word, guess, secondIndex)).toBe(TileState.PRESENT);
    expect(tileState(word, guess, thirdIndex)).toBe(TileState.ABSENT);
  });
});
