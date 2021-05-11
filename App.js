import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ChowNavigator from './navigation/ChowNavigator'

const fetchFonts = (_) => {
  return Font.loadAsync({
    "bebas-neue-reg": require("./assets/fonts/Bebas-Neue-Regular.ttf"),
    "bebas-neue-bold": require("./assets/fonts/Bebas-Neue-Bold.otf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={(_) => setFontLoaded(true)}
        onError={console.warn}
      />
    );

  }

  return (
    <ChowNavigator />
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
