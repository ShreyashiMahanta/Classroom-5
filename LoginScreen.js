import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Icon,Input } from 'react-native-elements';
import firebase from 'firebase';

export default class LoginScreen extends Component{
    constructor(){
        super();
    this.state = {
      emailId: "",
      password: "",
      student_name: "",
      class : "",
      section : "",
      roll_no: "",
      school_name : ""
      
    };
    }
    userLogin = (emailId, password) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailId, password)
        .then(() => {
          this.props.navigation.navigate("HomeScreen");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    };
    render(){
        return(
          <ScrollView style = {styles.scrollview}>

            <View style = {styles.view}>
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate('WelcomeScreen')}
               >
               <Image
               source = {
                require("../assets/backArrowPurple.png")
            }
            style = {{
                width : RFValue(100),
                height : RFValue(150),
                alignSelf : 'center',
               marginTop : RFValue(-40),
               marginBottom : RFValue(-30),
               marginLeft : RFValue(280),
            }}
                />
        
               </TouchableOpacity>
            <Image
               source = {
                require("../assets/login.png")
            }
            style = {{
                width : RFValue(360),
                height : RFValue(360),
               marginTop : RFValue(-178),
                marginLeft :RFValue(-70),
                marginRight : 80
            }}
                />
                <Text style = {styles.header}>login.</Text>  
                <Text style = {styles.text}>welcome back, great to see you again.</Text>
                <Text style = {styles.label}>name.</Text>
          
                <Input
              placeholder = {'name.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
      
                  size={24}
                  color='white'
                />
              }
              />
                <Text style = {styles.label}>school.</Text>
                <Input
              placeholder = {'school.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='school'
                  size={24}
                  color='white'
                />
              }
              />
                <Text style = {styles.label}>class.</Text>
               
                 <Input
              placeholder = {'class.'}
              style={styles.formTextInput}
              keyboardType={"numeric"}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='class'
                  size={24}
                  color='white'
                />
              }
              />
                 
                <Text style = {styles.label}>password.</Text>
               
                <Input
              placeholder = {'password.'}
              style={styles.formTextInput}
              secureTextEntry = {true}
                inputStyle = {{width : 200}}
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='white'
                />
              }
              />
              <Text style = {styles.label}>email-address.</Text>
               
               <Input
             placeholder = {'email-address.'}
               inputStyle = {{width : 200}}
             leftIcon={
               <Icon
                 name='email'
                 size={24}
                 color='white'
               />
             }
             />
                <TouchableOpacity style = {styles.button}
                onPress={() => {
                  this.userLogin('shreyashimahanta@gmail.com','123456');
                }             
              }>
                <Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
                
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        backgroundColor : '#543855',
        padding : 10
    },
    label : {
        fontSize:RFValue(20),
        color:"#FFA0A3",
        fontWeight:'bold',
        margin:RFValue(10) 
    },
    button : {
      borderRadius : 20,
      width : RFValue(200),
      height : RFValue(50),
      backgroundColor : '#FF8882',
      marginTop :30,
      paddingTop : 5,
      alignSelf : 'center',
      marginRight : RFValue(60),
      marginBottom : 20,
      marginLeft : RFValue(60)
  },
  buttonText : {
      fontSize : 20,
      color : '#ffffff',
      alignSelf : 'center',
      padding : RFValue(10),
      fontWeight : 'bold'
  },
  header : {
      fontSize : 50,
     // fontFamily  : 'sans-serif',
      color : '#c6535d',
      alignSelf : 'center',
      padding : 4,
      fontWeight : 'bold',
      marginTop : -70,
      marginRight  : RFValue(20)
  },
  scrollview : {
    flex: 1,
    backgroundColor: "#fff"
},
text : {
     fontSize : 20,
    // fontFamily  : 'sans-serif',
     color : '#c6535d',
     //padding : 8,
     marginLeft : 20
}

})