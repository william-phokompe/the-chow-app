import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../HeaderButton";
import DefaultText from "../DefaultText";
import { toggleFavorite } from "../../store/actions/mealAction";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const ChowRecipe = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const chowId = props.navigation.getParam("chowId");
  const selectedChow = availableMeals.find((meal) => meal.id === chowId);
  const isCurrentFavoriteMeal = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === chowId)
  );
  const dispatch = useDispatch();

  const toggleFavoriteMealHandler = useCallback(
    (_) => {
      dispatch(toggleFavorite(chowId));
    },
    [dispatch, chowId]
  );

  useEffect(
    (_) => {
      props.navigation.setParams({ toggleFav: toggleFavoriteMealHandler });
    },
    [toggleFavoriteMealHandler]
  );

  useEffect(
    (_) => {
      props.navigation.setParams({ isFav: isCurrentFavoriteMeal });
    },
    [isCurrentFavoriteMeal]
  );

  return (
    <ScrollView>
      <Image source={{ uri: selectedChow.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedChow.duration}m</DefaultText>
        <DefaultText>{selectedChow.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedChow.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedChow.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedChow.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

ChowRecipe.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("chowId");
  const chowTitle = navigationData.navigation.getParam("chowTitle");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: chowTitle,
    headerRight: (_) => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "bebas-neue-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default ChowRecipe;
