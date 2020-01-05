import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';

import AddNewCategory from '../screens/AddNewCategoryScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import SingleCategoryScreen from '../screens/SingleCategoryScreen';


const MainNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    SingleCategory: SingleCategoryScreen,
    AddCategory: AddNewCategory,
  }, {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
      } 
  });
  
  export default createAppContainer(MainNavigator);