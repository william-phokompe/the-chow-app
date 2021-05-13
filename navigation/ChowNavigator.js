import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";

import Categories from "../screens/Categories";
import ChowRecipe from "../screens/ChowRecipe";
import Chow from "../screens/Chow";
import Colors from "../constants/Colors";
import Favorites from '../screens/Favorites'

const ChowNavigator = createStackNavigator(
  {
    Category: {
      screen: Categories,
    },
    Chow: {
      screen: Chow,
    },
    Recipe: ChowRecipe,
  },
  {
    initialRouteName: "Category",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.iosPrimary,
      // headerBackTitle: "A Screen",
    },
  }
);

const FavoriteChowNavigator = createBottomTabNavigator({
  Meals: ChowNavigator,
  Favorites: Favorites
});

export default createAppContainer(FavoriteChowNavigator);
