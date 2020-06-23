import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import  WelcomeScreen from './screens/WelcomeScreen';
import  LoginScreen from './screens/LoginScreen';
import  StudentSignUpScreen from './screens/StudentSignUpScreen';
import  HomeScreen from './screens/HomeScreen';
import  WP from './screens/WP';
import SettingsScreen from './screens/SettingsScreen';
import QuestionScreen from './screens/QuestionScreen';
import { NavigationContainer } from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';
import ScheduleScreen from './screens/ScheduleScreen';
import NotificationScreen from './screens/NotificationScreen';
//import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default function App() {
  return (
     <AppContainer/>  
  );
}


var AppNavigator = createSwitchNavigator({ 
  WelcomeScreen : WelcomeScreen,
  LoginScreen : LoginScreen,
  StudentSignUpScreen : StudentSignUpScreen,
  WP : WP,
  HomeScreen : HomeScreen,
  SettingsScreen : SettingsScreen,
  QuestionScreen : QuestionScreen,
  ScheduleScreen : ScheduleScreen,
  NotificationScreen : NotificationScreen
},
{
  AppTabNavigator : AppTabNavigator,
},
)
const AppContainer = createAppContainer(AppNavigator)
