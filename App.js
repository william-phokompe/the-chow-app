import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ChowNavigator from "./navigation/ChowNavigator";
import mealsReducer from "./store/reducer/meals";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = (_) => {
  return Font.loadAsync({
    "bebas-neue-reg": require("./assets/fonts/Bebas-Neue-Regular.ttf"),
    "bebas-neue-bold": require("./assets/fonts/Bebas-Neue-Bold.otf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={(_) => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <ChowNavigator />
    </Provider>
  );
}
