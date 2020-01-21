import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors, Fonts } from '../constants/styles/Base';

import AddNewCategory from '../screens/AddNewCategoryScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import SingleCategoryScreen from '../screens/SingleCategoryScreen';
import MotionCategoryScreen from '../screens/MotionCategoryScreen';


const MainNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    SingleCategory: SingleCategoryScreen,
    AddCategory: AddNewCategory,
    MotionCategory: MotionCategoryScreen,
  }, {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
          headerTitleStyle: {
              fontFamily: Fonts.bold
          }
      } 
  });
  
  export default createAppContainer(MainNavigator);