import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import ChowList from "../ChowList";
import HeaderButton from "../HeaderButton";
import DefaultText from '../DefaultText'

const Favorites = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No facorite meals found. Start adding some</DefaultText>
      </View>
    );
  }

  // const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favorites;
