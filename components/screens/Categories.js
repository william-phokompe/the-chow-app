import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../../data/mock-data";
import GridTiles from "../GridTiles";
import HeaderButton from "../HeaderButton";

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
      style={{ width: "100%" }}
    />
  );
};

Categories.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Chow Categories",
    headerLeft: (_) => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={(_) => {
          navigationData.navigation.toggleDrawer()
        }} />
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
});

export default Categories;
