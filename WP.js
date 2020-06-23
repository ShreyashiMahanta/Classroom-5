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
                <Text style = {styles.header}>classroom.</Text> 
                
                <Image
                     source = {
                     require("../assets/write.png")
                        }
                            style = {{
                            width : RFValue(400),
                            height : RFValue(400),
                            alignSelf : 'center',
                            marginTop : -30
                        }} />         
                                          
                <Text style = {styles.header2}>learn.</Text>
                <Text style = {styles.text}>learn and create new </Text>
                <Text style = {styles.text2}> possibilities.</Text>
                
                <TouchableOpacity style = {styles.button}
                onPress={() => this.props.navigation.navigate('HomeScreen')}
                > 
                <Text style = {styles.buttonText}>                  
                    ENJOY !</Text></TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F7D330'
    },
    view : {
        flex : 1,
        backgroundColor : '#F7D330'
    },
    button : {
        borderRadius : 10,
        width : RFValue(180),
        height : RFValue(50),
        backgroundColor : '#ffffff',
        marginRight : 100,
        marginLeft : 100,
        marginTop :RFValue(60),
        paddingTop : 5
    },
    buttonText : {
        fontSize : 15,
        fontFamily  : 'sans-serif',
        color : '#004369',
        alignSelf : 'center',
        padding :RFValue(10),
        fontWeight : 'bold'
    },
    header : {
        fontSize : 40,
        fontFamily  : 'sans-serif',
        color : '#004369', 
        fontWeight : 'bold',
        alignContent : 'center',
        alignItems : 'center',
        marginTop : 45,
        marginLeft : 102
        
    },
    text  : {
        fontSize : 20,
        fontFamily  : 'serif',
        color : '#004369',
        marginLeft : 160
    },
    header2 : {
        fontSize : 30,
        fontFamily  : 'serif',
        color : '#004369', 
        fontWeight : 'bold',
        alignContent : 'center',
        alignItems : 'center',
        marginTop : 30,
        marginLeft : 222
        
    },
    text2 : {
        fontSize : 22,
        fontFamily  : 'serif',
        color : '#004369',
        marginLeft : 210,
        marginTop : RFValue(-2)
    }

})