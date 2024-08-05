import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Key from "./Key";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export function Tile({
  letter,
  tileState,
}: {
  letter: string;
  tileState: string;
}) {
  const colorScheme = useColorScheme() ?? "light";
  function getBgColor() {
    if (tileState === "CORRECT") {
      return Colors[colorScheme].letterCorrect;
    }
    if (tileState === "PRESENT") {
      return Colors[colorScheme].letterPresent;
    }
    if (tileState === "ABSENT") {
      return Colors[colorScheme].letterAbsent;
    }
  }
  function getBorderColor() {
    if (!tileState || tileState === "EMPTY") {
      return Colors[colorScheme].letterAbsent;
    }
    if (tileState === "CORRECT") {
      return Colors[colorScheme].letterCorrect;
    }
    if (tileState === "PRESENT") {
      return Colors[colorScheme].letterPresent;
    }
    if (tileState === "ABSENT") {
      return Colors[colorScheme].letterAbsent;
    }
  }
  return (
    <ThemedView
      style={[
        styles.container,
        {
          borderColor: getBorderColor(),
          backgroundColor: getBgColor(),
        },
      ]}
    >
      <ThemedText
        type="subtitle"
        style={[
          styles.tile,
          {
            color: Colors[colorScheme].text,
          },
        ]}
      >
        {letter}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 74,
    height: 74,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  tile: {
    fontSize: 38,
  },
});
