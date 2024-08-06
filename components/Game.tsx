import { StyleSheet } from "react-native";

import React from "react";
import { ThemedView } from "@/components/ThemedView";

import { Keyboard } from "@/components/Keyboard";
import { Board } from "@/components/Board";

export function Game() {
  return (
    <>
      <ThemedView style={styles.main}>
        <Board />
      </ThemedView>
      <ThemedView style={styles.keyboard}>
        <Keyboard />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.73,
    paddingTop: 50,
  },
  keyboard: {
    flexDirection: "row",
    flex: 0.25,
  },
});
