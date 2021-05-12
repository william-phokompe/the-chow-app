"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _reactNavigationStack = require("react-navigation-stack");

var _reactNavigation = require("react-navigation");

var _Categories = _interopRequireDefault(require("../screens/Categories"));

var _ChowRecipe = _interopRequireDefault(require("../screens/ChowRecipe"));

var _Chow = _interopRequireDefault(require("../screens/Chow"));

var _Colors = _interopRequireDefault(require("../constants/Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChowNavigator = (0, _reactNavigationStack.createStackNavigator)({
  Category: {
    screen: _Categories["default"]
  },
  Chow: {
    screen: _Chow["default"]
  },
  Recipe: _ChowRecipe["default"]
}, {
  initialRouteName: "Category",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: _reactNative.Platform.OS === "android" ? _Colors["default"].primary : ""
    },
    headerTintColor: _reactNative.Platform.OS === "android" ? "white" : _Colors["default"].iosPrimary // headerBackTitle: "A Screen",

  }
});

var _default = (0, _reactNavigation.createAppContainer)(ChowNavigator);

exports["default"] = _default;