import { MEALS } from "../../data/mock-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/mealAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const mealIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (mealIndex >= 0) {
        const exsistingFavMeals = [...state.favoriteMeals];

        exsistingFavMeals.splice(mealIndex, 1);
        state = { ...state, favoriteMeals: exsistingFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);

        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
      break;

    case SET_FILTERS:
        const appliedFilters = actions.filters;

        const updatedFilteredMeals = state.meals.filter(meal => {
            if (appliedFilters.glutenFree && !meal.isGluten) {
                return false;
            }

            if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                return false;
            }

            if (appliedFilters.vegetarian && !meal.isVegetarian) {
                return false;
            }

            if (appliedFilters.vegan && !meal.isVegan) {
                return false;
            }

            return true;
        });
        return {...state, filteredMeals: updatedFilteredMeals}
        break;
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
