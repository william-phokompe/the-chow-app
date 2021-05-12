import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/mock-data";
import Colors from "../constants/Colors";

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.grid}
        onPress={(_) => {
          props.navigation.navigate("Chow", { categoryId: itemData.item.id });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
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

  grid: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default Categories;
