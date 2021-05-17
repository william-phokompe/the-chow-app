import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from './MealItem'

const ChowList = (props) => {
  const renderMealItem = (itemData) => {
    let meals = itemData.item;
    return (
      <MealItem
        selectedCategory={meals}
        onSelect={(_) => {
          props.navigation.navigate("Recipe", { chowId: meals.id, chowTitle: meals.title });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export default ChowList;
