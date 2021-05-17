"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mockData = require("../../data/mock-data");

var initialState = {
  meals: _mockData.MEALS,
  filteredMeals: _mockData.MEALS,
  favoriteMeals: []
};

var mealsReducer = function mealsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};

var _default = mealsReducer;
exports["default"] = _default;