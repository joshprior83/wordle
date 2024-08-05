import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Key from "./Key";

export function Keyboard() {
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.row}>
          <Key letter={"Q"} />
          <Key letter={"W"} />
          <Key letter={"E"} />
          <Key letter={"R"} />
          <Key letter={"T"} />
          <Key letter={"Y"} />
          <Key letter={"U"} />
          <Key letter={"I"} />
          <Key letter={"O"} />
          <Key letter={"P"} />
        </ThemedView>
        <ThemedView style={styles.row}>
          <Key letter={"A"} />
          <Key letter={"S"} />
          <Key letter={"D"} />
          <Key letter={"F"} />
          <Key letter={"G"} />
          <Key letter={"H"} />
          <Key letter={"J"} />
          <Key letter={"K"} />
          <Key letter={"L"} />
        </ThemedView>
        <ThemedView style={styles.row}>
          <Key letter={"ENTER"} />
          <Key letter={"Z"} />
          <Key letter={"X"} />
          <Key letter={"C"} />
          <Key letter={"V"} />
          <Key letter={"B"} />
          <Key letter={"N"} />
          <Key letter={"M"} />
          <Key letter={"DEL"} />
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
    //backgroundColor: "blue",
    flexDirection: "row",
    flex: 0.33,
    marginVertical: 5,
    justifyContent: "center",
  },
});
