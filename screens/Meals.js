import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { CATEGORIES } from "../data/mock-data";

const Meals = (props) => {
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === props.navigation.getParam("categoryId")
  );
  return (
    <View style={styles.screen}>
      <Text>Hello from meals</Text>
      <Button
        title="show recipe"
        onPress={(_) => {
          props.navigation.navigate("Recipe");
        }}
      />
      <Button
        title="go back"
        onPress={(_) => {
          props.navigation.goBack();
        }}
      />
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

export default Meals;
