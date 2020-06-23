import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
//import db from '../config';
import firebase from 'firebase';

export default class QuestionScreen extends Component{
constructor() {
    super();
    this.state = {
      student_name: firebase.auth().currentUser.student_name,
      question: "",
      teachers : "",
      questionPublished : ""
    };
  }


publishQuestion = async (question)=>{
    var student_name = this.state.userId
    .where("email_id", "==", student_name)
      .get()
      .then()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          db.collection("teachers").doc(doc.id).update({
            questionPublished: true,
          });
        });
      });

    this.setState({
      questions: "",
      students: "",
      student_name : "",
      teachers : ""
    });
}
isQuestionPublished() {
    db.collection("users")
      .where("teachers", "==", this.state.student_name)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            questionPublished: doc.data().questionPublished,
            userDocId: doc.id,
          });
        });
      });
  }
  componentDidMount() {
    this.publishQuestion();
    this.isQuestionPublished();
  }
    render(){
        return(
           
            <View style = {styles.container}>
                <MyHeader
                title = 'Questions'
                />
                <Image
                source = {
                    require("../assets/question.png")
                }
                style = {{
                    width : 300,
                    height : 300,
                    alignSelf : 'center',
                    marginTop : -30
                }}
                />
                <Text style = {styles.text}>Ask a question(or more)!</Text>
            <ScrollView style = {styles.scrollview}>
                <TextInput
                style = {styles.textInput}
                placeholder = {'ask away...'}
                placeholderTextColor = {'black'}
                placeholder style = {styles.placeholderText}
                leftIcon={
                    <Icon
                      name = 'question'
                      size={24}
                      color='white'
                    />
                  }
                multiline
                   
                />
                 </ScrollView>
                <TouchableOpacity style ={styles.button}
                onPress = {()=>{
                  this.publishQuestion(question);
                  this.isQuestionPublished();
                }}
                >
                <Text style = {styles.buttonText}>Ask</Text></TouchableOpacity>
            </View>
       
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        //padding : 24,
        backgroundColor : '#C85250',
        width : 320
    },
    textInput : {
        borderColor : '#013A20',
        width : RFValue(300),
        height : RFValue(160),
        borderWidth : 4,
        borderRadius : 10,
        marginLeft : 20
    },
    button : {
       backgroundColor :  '#E9EAE0',
       marginLeft : RFValue(180),
       borderRadius : 20,
       marginTop : 20,
       marginRight : 10
    },
    buttonText : {
        fontSize : RFValue(25),
        fontWeight : 'bold',
        padding : 10,
        color : '#E7625F',
        marginLeft : 45
    },
    text : {
        fontSize : RFValue(30),
        color : '#57A5B8',
        marginLeft : 30,
        marginBottom : 20,
        marginTop : -30
    },
    scrollview : {
        flex: 1,
        backgroundColor: "#fff"
    },
    placeholderText : {
        paddingLeft : 20,
        paddingTop : -20
    }
})

