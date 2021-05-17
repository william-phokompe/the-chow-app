import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../../data/mock-data";
import ChowList from "../ChowList";
import DefaultText from "../DefaultText";
import { View, StyleSheet } from 'react-native'

const Chow = (props) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Maybe check your filters</DefaultText>
      </View>
    );
  }

  return <ChowList listData={displayedMeals} navigation={props.navigation} />;
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Chow;
