import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../../data/mock-data";
import GridTiles from "../GridTiles";

enableScreens();

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <GridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onTap={(_) => {
          props.navigation.navigate("Chow", { categoryId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      style={{width: '100%'}}
    />
  );
};

Categories.navigationOptions = {
  headerTitle: "Chow Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;
