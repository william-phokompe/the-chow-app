import { createStackNavigator } from 'react-navigation-stack'
import Categories from '../screens/Categories'
import Meals from '../screens/Meals'

createStackNavigator({
    Category: Categories,
    Meal: Meals
});