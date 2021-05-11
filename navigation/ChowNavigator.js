import { createStackNavigator } from 'react-navigation-stack'
import Categories from '../screens/Categories'
import MealRecipe from '../screens/MealRecipe';
import Meals from '../screens/Meals'

createStackNavigator({
    Category: Categories,
    Meal: Meals,
    Recipe: MealRecipe
});