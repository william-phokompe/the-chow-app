import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../../data/mock-data";
import ChowList from "../ChowList";

const Chow = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <ChowList listData={displayedMeals} navigation={props.navigation}/>;
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

export default Chow;
