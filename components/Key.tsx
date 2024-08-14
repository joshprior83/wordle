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
    console.log(`log from Key - pressed ${letter}`);
  }
  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.key,
        {
          backgroundColor:
            Colors[colorScheme][keyState as keyof ColorSchemeName],
          width: letter === "ENTER" || letter === "DEL" ? 53 : 35,
        },
      ]}
    >
      <ThemedText
        type="subtitle"
        style={[
          styles.text,
          {
            color: Colors[colorScheme].text,
            fontSize: letter === "ENTER" || letter === "DEL" ? 12 : 18,
          },
        ]}
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

const styles = StyleSheet.create({
  key: {
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 35,
  },
  text: {
    fontSize: 18,
  },
});
