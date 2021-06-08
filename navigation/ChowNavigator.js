import React from "react";
import { Platform, Text } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Categories from "../components/screens/Categories";
import ChowRecipe from "../components/screens/ChowRecipe";
import Chow from "../components/screens/Chow";
import Colors from "../constants/Colors";
import Favorites from "../components/screens/Favorites";
import Filters from "../components/screens/Filters";

const defaultNavigationStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "bebas-neue-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "bebas-neue-reg",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.iosPrimary,
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
  { defaultNavigationOptions: defaultNavigationStackOptions }
);

const FavNavigator = createStackNavigator(
  {
    MyFavorites: Favorites,
    MealDetail: ChowRecipe,
  },
  {
    defaultNavigationOptions: defaultNavigationStackOptions,
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
      },
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const FavoriteChowNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans",
          },
          activeTintColor: Colors.secondary,
        },
      });

const FilterNavigator = createStackNavigator(
  {
    FiltersScreen: Filters,
  },
  {
    defaultNavigationOptions: defaultNavigationStackOptions,
  }
);

const mainNavigator = createDrawerNavigator(
  {
    FavoriteChow: {
      screen: FavoriteChowNavigator,
      navigationOptions: {
        drawerLabel: "Favorite Chow",
      },
    },
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
      itemsContainerStyle: {
        marginVertical: 100,
      },
      labelStyle: {
        fontFamily: "bebas-neue-reg",
      },
    },
  }
);

export default createAppContainer(mainNavigator);
