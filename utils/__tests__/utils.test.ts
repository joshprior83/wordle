import { isValid, tileState } from "@/utils/utils";

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
