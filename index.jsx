import React from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";
import { Svg, Rect, Circle, Path } from "react-native-svg";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  svg: {
    flex: 1
  }
});

function Hoge() {
  return (
    <View style={styles.container}>
      <Text>With non style</Text>
      <Svg height="100" width="100">
        <Rect x="0" y="0" width="100" height="100" fill="black" />
        <Circle cx="50" cy="50" r="30" fill="yellow" />
        <Circle cx="40" cy="40" r="4" fill="black" />
        <Circle cx="60" cy="40" r="4" fill="black" />
        <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
      </Svg>
      {/*
      <Text>With style</Text>
      <Svg height="100" width="100" style={styles.svg}>
        <Rect x="0" y="0" width="100" height="100" fill="black" />
        <Circle cx="50" cy="50" r="30" fill="yellow" />
        <Circle cx="40" cy="40" r="4" fill="black" />
        <Circle cx="60" cy="40" r="4" fill="black" />
        <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
      </Svg>
      */}
      <Text>With style</Text>
      <Svg height="100" width="100" style={styles.svg}>
        <Rect x="0" y="0" width="100" height="100" fill="black" />
        <Circle cx="50" cy="50" r="30" fill="yellow" />
        <Circle cx="40" cy="40" r="4" fill="black" />
        <Circle cx="60" cy="40" r="4" fill="black" />
        <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
      </Svg>
    </View>
  );
}

AppRegistry.registerComponent("Hoge", () => Hoge);

AppRegistry.runApplication("Hoge", {
  rootTag: document.getElementById("root")
});
