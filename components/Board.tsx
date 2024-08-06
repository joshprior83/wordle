import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Tile } from "./Tile";

export function Board() {
  const enum TileState {
    UNUSED = "unused",
    ABSENT = "absent",
    PRESENT = "present",
    CORRECT = "correct",
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.row}>
        <Tile letter={"A"} tileState={TileState.ABSENT} />
        <Tile letter={"B"} tileState={TileState.CORRECT} />
        <Tile letter={"C"} tileState={TileState.PRESENT} />
        <Tile letter={"D"} tileState={TileState.ABSENT} />
        <Tile letter={"E"} tileState={TileState.ABSENT} />
      </ThemedView>
      <ThemedView style={styles.row}>
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
      </ThemedView>
      <ThemedView style={styles.row}>
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
      </ThemedView>
      <ThemedView style={styles.row}>
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
      </ThemedView>
      <ThemedView style={styles.row}>
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
        <Tile letter={""} tileState={TileState.UNUSED} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  row: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
  },
});
