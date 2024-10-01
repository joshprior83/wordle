import { memo } from "react";
import { StyleSheet, ColorSchemeName } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

interface TileProps {
  letter: string;
  tileState: string;
}

export const Tile = memo(function Tile({ letter, tileState }: TileProps) {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <ThemedView
      accessibilityLabel="tile"
      style={[styles(colorScheme, Colors, tileState).container]}
    >
      <ThemedText
        type="subtitle"
        style={[styles(colorScheme, Colors, tileState).tile]}
      >
        {letter}
      </ThemedText>
    </ThemedView>
  );
});

const styles = (colorScheme: string, Colors: any, tileState: string) =>
  StyleSheet.create({
    container: {
      width: 74,
      height: 74,
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 3,
      borderColor: Colors[colorScheme][tileState as keyof ColorSchemeName],
      backgroundColor:
        tileState !== "unused"
          ? Colors[colorScheme][tileState as keyof ColorSchemeName]
          : "none",
    },
    tile: {
      fontSize: 38,
      color: Colors[colorScheme].text,
    },
  });
