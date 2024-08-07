import React, { useState } from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Game } from "@/components/Game";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [id, setId] = useState("123");
  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Explore',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
    //       ),
    //     }}
    //   />
    // </Tabs>
    <React.StrictMode>
      <Game key={id} />
      <View style={styles.container}>
        <Pressable
          style={styles.resetButton}
          onPress={() => {
            setId(Math.random().toString());
          }}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </React.StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "orange",
    flex: 0.1,
    justifyContent: "center",
  },
  resetButton: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "blue",
    marginHorizontal: 40,
    paddingVertical: 5,
    justifyContent: "flex-end",
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    zIndex: 1001,
  },
});
