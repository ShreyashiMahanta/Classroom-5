import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class WelcomeScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.header} >classroom.</Text> 
                <Image
                     source = {
                     require("../assets/girlStudying.png")
                        }
                            style = {{
                            width : 340,
                            height : 340,
                            alignSelf : 'center',
                            marginTop : -20,
                            marginLeft : -10
                        }} />
                           
                <TouchableOpacity style = {styles.signUpButton}
                 onPress={() => this.props.navigation.navigate('StudentSignUpScreen')}>               
                    <Text style = {styles.buttonText1}>
                    SIGN UP</Text></TouchableOpacity>

                <TouchableOpacity style = {styles.signInButton}
                onPress={() => this.props.navigation.navigate('LoginScreen')}>                
                    <Text style = {styles.buttonText}>                  
                    LOGIN</Text></TouchableOpacity>
                
                       <Text style = {styles.header2}>hi there.</Text>
                <Text style = {styles.text}>welcome to classroom.</Text>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FCB5AC'
    },
    signInButton : {
        borderRadius : 10,
        width : RFValue(180),
        height : RFValue(50),
        backgroundColor : '#ffffff',
        marginRight : 100,
        marginLeft : RFValue(80),
        marginTop :30,
        paddingTop : 5
    },
    signUpButton : {
        borderRadius : 10,
        width : RFValue(180),
        height : RFValue(50),
        backgroundColor : '#7F8FA3',
        marginTop :RFValue(20),
        marginLeft : RFValue(80),
        paddingTop : 5,
        color : '#ffffff'
        
    },
    buttonText : {
        fontSize : 15,
        //fontFamily  : 'sans-serif',
        color : '#004369',
        alignSelf : 'center',
        paddingTop : RFValue(10),
        fontWeight : 'bold'
    },
    buttonText1 : {
        fontSize : 15,
       // fontFamily  : 'sans-serif',
        color : '#ffffff',
        alignSelf : 'center',
        padding : RFValue(10),
        fontWeight : 'bold'
    },
    header : {
        fontSize : 40,
       // fontFamily  : 'sans-serif',
        color : '#004369', 
        fontWeight : 'bold',
        alignContent : 'center',
        alignItems : 'center',
        marginTop : RFValue(50),
        marginLeft : RFValue(85)
        
    },
    text  : {
        fontSize : 25,
       // fontFamily  : 'sans-serif',
        color : '#004369',
        marginLeft : RFValue(60),
        
    },
    header2 : {
        fontSize : 40,
       // fontFamily  : 'sans-serif',
        color : '#004369', 
        fontWeight : 'bold',
        alignContent : 'center',
        alignItems : 'center',
        marginTop : RFValue(70),
        marginLeft : RFValue(100),
        
    },

})