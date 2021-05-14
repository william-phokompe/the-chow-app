import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.screen}>
      <Text>My Faves</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favorites;
