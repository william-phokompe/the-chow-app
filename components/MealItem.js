import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  console.log(props.selectedCategory.imageUrl);
  return (
    <View style={styles.mealItem}>
      <TouchableComponent onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealAspect, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.selectedCategory.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.selectedCategory.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealAspect, ...styles.mealDescription }}>
            <Text>{props.selectedCategory.duration}m</Text>
            <Text>{props.selectedCategory.complexity.toUpperCase()}</Text>
            <Text>{props.selectedCategory.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mealAspect: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
  },
  mealHeader: {
    height: "85%",
  },

  mealDescription: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: 'center',
    height: '15%'
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  title: {
    fontFamily: "bebas-neue-bold",
    fontSize: 20,
    color: "white",

    textAlign: "center",
  },
});

export default MealItem;
