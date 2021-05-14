import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer'

import Categories from "../components/screens/Categories";
import ChowRecipe from "../components/screens/ChowRecipe";
import Chow from "../components/screens/Chow";
import Colors from "../constants/Colors";
import Favorites from "../components/screens/Favorites";
import Filters from '../components/screens/Filters'

const defaultNavigationStackOptions = {
  // initialRouteName: "Category",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.iosPrimary,
  },
};

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
    defaultNavigationStackOptions
);

const FavNavigator = createStackNavigator({
  MyFavorites: Favorites,
  MealDetail: ChowRecipe
}, 
  defaultNavigationStackOptions
)

const tabScreenConfig = {
  Meals: {
    screen: ChowNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    }
  },
};

const FavoriteChowNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.primary,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primary,
        },
      });

const FilterNavigator = createStackNavigator({
  FiltersScreen: {screen: Filters}
}, {defaultNavigationOptions: defaultNavigationStackOptions});

const mainNavigator = createDrawerNavigator({
  FavoriteChow: FavoriteChowNavigator,
  Filters: FilterNavigator
});

export default createAppContainer(mainNavigator);
