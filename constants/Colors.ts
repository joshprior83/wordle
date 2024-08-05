/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    keyBg: "#d3d6da",
    keyCorrect: "#6aaa64",
    keyAbsent: "#787c7e",
    letterCorrect: "#6aaa64", //same as key
    letterAbsent: "#787c7e", //same as key
    letterPresent: "#c9b458",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    keyBg: "#818384",
    keyCorrect: "#538d4e",
    keyAbsent: "#3a3a3c",
    letterCorrect: "#538d4e", //same as key
    letterAbsent: "#3a3a3c", //same as key
    letterPresent: "#b59f3b",
  },
};
