import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import Categories from '../screens/Categories'
import MealRecipe from '../screens/MealRecipe';
import Meals from '../screens/Meals'

const ChowNavigator = createStackNavigator({
    Category: Categories,
    Meals: {
        screen: Meals
    },
    Recipe: MealRecipe
});

export default createAppContainer(ChowNavigator);