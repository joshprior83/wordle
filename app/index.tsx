import { RefreshControl, ScrollView } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Game } from "@/components/Game";

export default function Index() {
  const colorScheme = useColorScheme() ?? "light";
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
