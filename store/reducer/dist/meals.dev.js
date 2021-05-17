"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mockData = require("../../data/mock-data");

var _mealAction = require("../actions/mealAction");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = {
  meals: _mockData.MEALS,
  filteredMeals: _mockData.MEALS,
  favoriteMeals: []
};

var mealsReducer = function mealsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _mealAction.TOGGLE_FAVORITE:
      var mealIndex = state.favoriteMeals.findIndex(function (meal) {
        return meal.id === action.mealId;
      });

      if (mealIndex >= 0) {
        var exsistingFavMeals = _toConsumableArray(state.favoriteMeals);

        exsistingFavMeals.splice(mealIndex, 1);
        state = _objectSpread({}, state, {
          favoriteMeals: exsistingFavMeals
        });
      } else {
        var meal = state.meals.find(function (meal) {
          return meal.id === action.mealId;
        });
        return _objectSpread({}, state, {
          favoriteMeals: state.favoriteMeals.concat(meal)
        });
      }

      break;

    default:
      return state;
  }

  return state;
};

var _default = mealsReducer;
exports["default"] = _default;