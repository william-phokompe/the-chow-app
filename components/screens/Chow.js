import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../../data/mock-data";
import MealItem from '../MealItem'

const Chow = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    let meals = itemData.item;
    return (
      <MealItem selectedCategory={meals} onSelect={_ => {
        props.navigation.navigate("Recipe", {chowId: meals.id})
      }}/>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
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
    padding: 5
  },
});

export default Chow;
