import { ColorSchemeName, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import DelIcon from "./DelIcon";

interface KeyProps {
  letter: string;
  keyState: string;
  onKeyPress: Function;
}

export default function Key({ letter, keyState, onKeyPress }: KeyProps) {
  const colorScheme = useColorScheme() ?? "light";
  function handlePress() {
    onKeyPress(letter);
  }
  return (
    <Pressable
      onPress={handlePress}
      testID={letter}
      style={[styles(colorScheme, Colors, letter, keyState).key]}
    >
      <ThemedText
        type="subtitle"
        style={[styles(colorScheme, Colors, letter, keyState).text]}
      >
        {letter === "DEL" ? (
          <View>
            <DelIcon color={Colors[colorScheme].text} />
          </View>
        ) : (
          letter
        )}
      </ThemedText>
    </Pressable>
  );
}

const styles = (
  colorScheme: string,
  Colors: any,
  key: string,
  keyState: string
) =>
  StyleSheet.create({
    key: {
      margin: 3,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      backgroundColor: Colors[colorScheme][keyState as keyof ColorSchemeName],
      width: key === "ENTER" || key === "DEL" ? 53 : 35,
    },
    text: {
      color: Colors[colorScheme].text,
      fontSize: key === "ENTER" || key === "DEL" ? 12 : 18,
    },
  });
