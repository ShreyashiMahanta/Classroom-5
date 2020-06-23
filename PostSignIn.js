import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';


export default class PostSignIn extends Component{
    render(){
        return(
            <View>
                <Tick/>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('HomeScreen')}
                ><Text>Continue</Text></TouchableOpacity>
            </View>
        )
    }
}