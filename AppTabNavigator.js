import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import QuestionScreen from '../screens/QuestionScreen';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen:HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/homeIcon.png")} style={{width:50, height:50}}/>,
      tabBarLabel : "Home",
    }
  },
  SettingsScreen : {
    screen: SettingsScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/settingsIcon.png")} style={{width:50, height:50}}/>,
      tabBarLabel : "Settings",
    }
  },
  QuestionScreen : {
    screen: QuestionScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/questionIcon.png")} style={{width:50, height:50}}/>,
      tabBarLabel : "Questions",
    }
  },
  ScheduleScreen : {
    screen: ScheduleScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/scheduleIcon.png")} style={{width:50, height:50}}/>,
      tabBarLabel : "Schedule",
    }
  }, 
});