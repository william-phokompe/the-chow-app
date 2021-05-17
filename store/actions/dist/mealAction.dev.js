"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFilters = exports.toggleFavorite = exports.SET_FILTERS = exports.TOGGLE_FAVORITE = void 0;
var TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
exports.TOGGLE_FAVORITE = TOGGLE_FAVORITE;
var SET_FILTERS = "SET_FILTERS";
exports.SET_FILTERS = SET_FILTERS;

var toggleFavorite = function toggleFavorite(id) {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id
  };
};

exports.toggleFavorite = toggleFavorite;

var setFilters = function setFilters(filterSettings) {
  return {
    type: SET_FILTERS,
    filters: filterSettings
  };
};

exports.setFilters = setFilters;