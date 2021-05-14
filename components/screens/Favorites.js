import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ChowList from "../ChowList";
import { MEALS } from "../../data/mock-data";
import HeaderButton from "../HeaderButton";

const Favorites = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <ChowList listData={favMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={(_) => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Favorites;
