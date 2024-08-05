import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Keyboard } from "@/components/Keyboard";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <>
      <ThemedView style={styles.main}>
        <ThemedText style={{ color: Colors[colorScheme].text }}>
          asdfasdf
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.keyboard}>
        <Keyboard />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.75,
    paddingTop: 50,
  },
  keyboard: {
    flexDirection: "row",
    flex: 0.25,
  },
});
