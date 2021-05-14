import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Categories from "../screens/Categories";
import ChowRecipe from "../screens/ChowRecipe";
import Chow from "../screens/Chow";
import Colors from "../constants/Colors";
import Favorites from "../screens/Favorites";

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
    screen: Favorites,
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

export default createAppContainer(FavoriteChowNavigator);
