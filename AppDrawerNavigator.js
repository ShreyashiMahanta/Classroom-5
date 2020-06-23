import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({

  render(){
    return(
      <Avatar
      rounded
      source = {{
      uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      }}
      />
    )
  },
  
  Home : {
    screen : HomeScreen,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
 Schedule : {
    screen : ScheduleScreen,
    navigationOptions:{
      drawerIcon : <Icon name="time" type ="font-awesome" />,
      drawerLabel : "Schedule"
    }
  },
  Question : {
    screen : QuestionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="question" type ="font-awesome" />,
      drawerLabel : "Questions"
    }
  },
  
  Setting : {
    screen : SettingsScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},
  {
    initialRouteName : 'Home'
  }
  )