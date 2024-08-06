import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Key from "./Key";

export function Keyboard() {
  const enum KeyState {
    UNUSED = "unused",
    ABSENT = "absent",
    PRESENT = "present",
    CORRECT = "correct",
  }
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.row}>
          <Key letter={"Q"} keyState={KeyState.UNUSED} />
          <Key letter={"W"} keyState={KeyState.UNUSED} />
          <Key letter={"E"} keyState={KeyState.ABSENT} />
          <Key letter={"R"} keyState={KeyState.UNUSED} />
          <Key letter={"T"} keyState={KeyState.UNUSED} />
          <Key letter={"Y"} keyState={KeyState.UNUSED} />
          <Key letter={"U"} keyState={KeyState.UNUSED} />
          <Key letter={"I"} keyState={KeyState.UNUSED} />
          <Key letter={"O"} keyState={KeyState.UNUSED} />
          <Key letter={"P"} keyState={KeyState.UNUSED} />
        </ThemedView>
        <ThemedView style={styles.row}>
          <Key letter={"A"} keyState={KeyState.ABSENT} />
          <Key letter={"S"} keyState={KeyState.UNUSED} />
          <Key letter={"D"} keyState={KeyState.ABSENT} />
          <Key letter={"F"} keyState={KeyState.UNUSED} />
          <Key letter={"G"} keyState={KeyState.UNUSED} />
          <Key letter={"H"} keyState={KeyState.UNUSED} />
          <Key letter={"J"} keyState={KeyState.UNUSED} />
          <Key letter={"K"} keyState={KeyState.UNUSED} />
          <Key letter={"L"} keyState={KeyState.UNUSED} />
        </ThemedView>
        <ThemedView style={styles.row}>
          <Key letter={"ENTER"} keyState={KeyState.UNUSED} />
          <Key letter={"Z"} keyState={KeyState.UNUSED} />
          <Key letter={"X"} keyState={KeyState.UNUSED} />
          <Key letter={"C"} keyState={KeyState.PRESENT} />
          <Key letter={"V"} keyState={KeyState.UNUSED} />
          <Key letter={"B"} keyState={KeyState.CORRECT} />
          <Key letter={"N"} keyState={KeyState.UNUSED} />
          <Key letter={"M"} keyState={KeyState.UNUSED} />
          <Key letter={"DEL"} keyState={KeyState.UNUSED} />
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flex: 0.33, //row height
    marginVertical: 5,
    justifyContent: "center",
  },
});
