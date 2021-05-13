import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const GridTiles = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.grid}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onTap}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 3,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10
  },
  title: {
    fontFamily: "bebas-neue-reg",
    fontSize: 22,
    textAlign: "right",
  },
});

export default GridTiles;
