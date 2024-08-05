import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function Key({ letter }: { letter: string }) {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={[
        styles.key,
        {
          backgroundColor: Colors[colorScheme].keyBg,
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
            fontSize: letter === "ENTER" || letter === "DEL" ? 10 : 18,
          },
        ]}
      >
        {letter}
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
