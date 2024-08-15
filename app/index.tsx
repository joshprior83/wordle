import { RefreshControl, ScrollView, StyleSheet } from "react-native";
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
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Game key={id} />
      </ScrollView>
    </React.StrictMode>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
});
