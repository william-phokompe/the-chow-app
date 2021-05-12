import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Categories from "../screens/Categories";
import ChowRecipe from "../screens/ChowRecipe";
import Chow from "../screens/Chow";
import Colors from "../constants/Colors";

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.iosPrimary,
      headerBackTitle: 'A Screen'
    },
  }
);

export default createAppContainer(ChowNavigator);
