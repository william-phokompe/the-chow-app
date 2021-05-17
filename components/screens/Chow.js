import React from "react";
import { useSelector } from 'react-redux';

import { CATEGORIES } from "../../data/mock-data";
import ChowList from "../ChowList";

const Chow = (props) => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = availableMeals.filter(
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
