import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/mock-data";

const Chow = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

Chow.navigationOptions = (navigationData) => {
  const selectedCategory = CATEGORIES.find(
    (category) =>
      category.id === navigationData.navigation.getParam("categoryId")
  );

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chow;
