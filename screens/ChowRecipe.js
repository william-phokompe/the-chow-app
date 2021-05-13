import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/mock-data";
import HeaderButton from '../components/HeaderButton';

const ChowRecipe = (props) => {
  const chowId = props.navigation.getParam("chowId");

  const selectedChow = MEALS.find((meal) => meal.id === chowId);

  return (
    <View style={styles.screen}>
      <Text>{selectedChow.title}</Text>
    </View>
  );
};

ChowRecipe.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("chowId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: _ => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={(_) => console.log("mark as fave")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChowRecipe;
