import { MEALS } from '../../data/mock-data'

const initialState =  {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}
const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer;