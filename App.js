import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo-app-loading";

const fetchFonts = _ => {
  Font.loadAsync({
    'bebas-neue-reg': require('./assets/fonts/Bebas-Neue-Regular.ttf'),
    'bebas-neue-bold': require('./assets/fonts/Bebas-Neue-Bold.otf')
  });
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
