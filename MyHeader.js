import React,{Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import { AppDrawerNavigator } from './AppDrawerNavigator';
//import firebase from 'firebase';
//import db from '../config';
import NotificationScreen from '../screens/NotificationScreen';

export default class MyHeader extends Component{
    
    BellIconWithBadge = ()=>{
        return(
            <View>
                <Icon
                name = "bell"
                type = "font-awesome"
                color = '#ffffff'
                size = {30}
                />
            </View>
        )
    }
    render(){
        return(
            <Header
             leftComponent={<Icon name='bars' type='font-awesome' color='#FEFCFF'           
            />}
              centerComponent={{ text: this.props.title, style: { color: '#FEFCFF', fontSize:25,fontWeight:"bold", padding : 5,width : 100,} }}
              rightComponent={<this.BellIconWithBadge {...this.props}
              onPress = {()=>{
                this.props.navigation.navigate('NotificationScreen')
              }}
              />}
              backgroundColor = "#FCB5AC"
              
            />
    
    )
    }
}
