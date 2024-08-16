import { StyleSheet, ColorSchemeName } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

interface TileProps {
  letter: string;
  tileState: string;
}

export function Tile({ letter, tileState }: TileProps) {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <ThemedView
      accessibilityLabel="tile"
      style={[
        styles.container,
        {
          borderColor: Colors[colorScheme][tileState as keyof ColorSchemeName],
          backgroundColor:
            tileState !== "unused"
              ? Colors[colorScheme][tileState as keyof ColorSchemeName]
              : "none",
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
    marginHorizontal: 3,
  },
  tile: {
    fontSize: 38,
  },
});
