import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen  from '../screens/HomeScreen';

export const AppStackNavigator = createStackNavigator({
 
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
{
  initialRouteName: 'HomeScreen'
}
);