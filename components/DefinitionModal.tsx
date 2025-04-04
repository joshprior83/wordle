import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Modal from "react-native-root-modal";
import React from "react";

interface defModalProps {
  definition: string;
  modalVisible: boolean;
  onKeyPress: Function;
}

export function DefinitionModal({
  definition,
  modalVisible,
  onKeyPress,
}: defModalProps) {
  const colorScheme = useColorScheme() ?? "light";

  function handlePress() {
    onKeyPress();
  }

  return (
    <Modal visible={modalVisible} style={[styles(colorScheme, Colors).modal]}>
      <View style={[styles(colorScheme, Colors).centeredView]}>
        <View style={[styles(colorScheme, Colors).modalContent]}>
          {definition === "" ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <ThemedText style={[styles(colorScheme, Colors).definitionText]}>
              {definition}
            </ThemedText>
          )}
          <Pressable onPress={() => handlePress()}>
            <ThemedText>Close</ThemedText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = (colorScheme: string, Colors: any) =>
  StyleSheet.create({
    modal: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      position: "absolute",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: Colors[colorScheme].background,
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
    },
    definitionText: {
      fontSize: 18,
      marginBottom: 20,
    },
  });
