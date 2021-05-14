import React from "react";

import ChowList from '../ChowList'
import {MEALS} from '../../data/mock-data'

const Favorites = (props) => {

  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return (
    <ChowList listData={favMeals} navigation={props.navigation}/>
  );
};

Favorites.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default Favorites;
