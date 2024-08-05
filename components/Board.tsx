import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Key from "./Key";
import { ThemedText } from "./ThemedText";
import { Tile } from "./Tile";

export function Board() {
  const enum TileState {
    EMPTY = "EMPTY",
    ABSENT = "ABSENT",
    PRESENT = "PRESENT",
    CORRECT = "CORRECT",
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
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
      </ThemedView>
      <ThemedView style={styles.row}>
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
      </ThemedView>
      <ThemedView style={styles.row}>
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
      </ThemedView>
      <ThemedView style={styles.row}>
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
        <Tile letter={""} tileState={TileState.EMPTY} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    //flexDirection: "row",
    // /backgroundColor: "green",
  },
  row: {
    //backgroundColor: "red",
    //flex: 1,
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between",
    //flexDirection: "row",
  },
});
