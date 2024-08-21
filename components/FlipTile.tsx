import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Tile } from "./Tile";

export const FlipTile = ({ letter, tileState, index }: any) => {
  const DELAY = 400;
  const DURATION = 500;
  const isFlipped = useSharedValue(false);
  useEffect(() => {
    setTimeout(() => (isFlipped.value = !isFlipped.value), index * DELAY);
  }, []);

  const preTileAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration: DURATION });

    return {
      transform: [{ rotateY: rotateValue }],
    };
  });

  const flipTileAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration: DURATION });

    return {
      transform: [{ rotateY: rotateValue }],
    };
  });

  return (
    <View>
      <Animated.View style={[styles.preTile, preTileAnimatedStyle]}>
        <Tile letter={letter} tileState={"unused"} />
      </Animated.View>
      <Animated.View style={[styles.flipTile, flipTileAnimatedStyle]}>
        <Tile letter={letter} tileState={tileState} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  preTile: {
    position: "absolute",
    zIndex: 1,
  },
  flipTile: {
    backfaceVisibility: "hidden",
    zIndex: 2,
  },
});
