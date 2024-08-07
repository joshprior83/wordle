import React, { useState } from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Game } from "@/components/Game";
import { RefreshControl, ScrollView } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [id, setId] = useState("123");
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setId(Math.random().toString());
    setTimeout(() => {
      setRefreshing(false);
    }, 50);
  }, []);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%" }}
        style={{
          flexDirection: "row",
          flex: 1,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Game key={id} />
      </ScrollView>
    </React.StrictMode>
  );
}
