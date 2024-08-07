import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Key from "./Key";

export function Keyboard({
  keys,
  onKeyPress,
}: {
  keys: { key: string; row: number; style: string }[];
  onKeyPress: Function;
}) {
  const enum KeyState {
    UNUSED = "unused",
    ABSENT = "absent",
    PRESENT = "present",
    CORRECT = "correct",
  }

  const keyRow1: { key: string; row: number; style: string }[] = keys.filter(
    (val) => val.row === 1
  );
  const keyRow2: { key: string; row: number; style: string }[] = keys.filter(
    (val) => val.row === 2
  );
  const keyRow3: { key: string; row: number; style: string }[] = keys.filter(
    (val) => val.row === 3
  );
  function handlePress(letter: string) {
    onKeyPress(letter);
    console.log(`log from Keyboard - pressed ${letter}`);
  }

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.row}>
          {keyRow1.map((val, index) => (
            <Key
              letter={val.key}
              keyState={val.style}
              onKeyPress={handlePress}
              key={index}
            />
          ))}
        </ThemedView>
        <ThemedView style={styles.row}>
          {keyRow2.map((val, index) => (
            <Key
              letter={val.key}
              keyState={val.style}
              onKeyPress={handlePress}
              key={index}
            />
          ))}
        </ThemedView>
        <ThemedView style={styles.row}>
          {keyRow3.map((val, index) => (
            <Key
              letter={val.key}
              keyState={val.style}
              onKeyPress={handlePress}
              key={index}
            />
          ))}
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
