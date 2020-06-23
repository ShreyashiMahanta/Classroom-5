import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import {Input} from 'react-native-elements';
//import firebase from 'firebase';
import { Icon } from 'react-native-elements';

export default class HomeScreen extends Component{
    
    constructor(){
        super();
        this.state = {
            student_name : "",
            grade : "",
            section : "",
            roll_number : "",
            school : "",
            notice : "",
            current_subject : "",
            current_teacher : "",
            today_schedule : "",
        }
    }
    displayNotice = ()=>{
        db.collection('student').add({
        student_name: student_name,
        grade: grade,
        roll_number: roll_number,
        school: school,
        notice: notice,
        date: firebase.firestore.FieldValue.serverTimestamp(),}
           )
        .onSnapshot((snapshot)=>{
      var notice = snapshot.docs.map((doc) => doc.data())
      this.setState({
        notice : notice
      });
    })
  }

  componentDidMount(){
    this.displayNotice()
  }
    
      scheduleForToday=()=>{
      db.collection("student")
    .add({
        student_name: student_name,
        grade: grade,
        section: section,
        current_subject: current_subject,
        current_teacher : current_teacher,
        today_schedule : today_schedule,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    
    render(){
        return(
            <ScrollView style={styles.scrollview}>
            <View style = {styles.view}>
                <MyHeader
                title = "Home"
                style = {{width : 200}}
                />
              <Input
              placeholder = {'search.'}
              leftIcon={
                <Icon
                  name='search'
                  size={24}
                  color='gray'
                />
              }
              />
              <Text style = {styles.header}>hi {this.state.student_name}</Text>
              <Image
               source = {
                require("../assets/home.jpg")
            }
            style = {{
                width : 180,
                height : 180,
                alignSelf : 'center',
                borderRadius : 5
            }}
                />
                <Text style = {styles.text}>Your schedule today.</Text>
                   <ScrollView style={styles.scrollview}>       
                <View style = {styles.view2}>              
                <View style = {styles.view3}>
                <Text style = {styles.viewText2}>Biology</Text></View>                
                <View style = {styles.view4}><Text style = {styles.viewText2}>History</Text></View>
                <View style = {styles.view5}><Text style = {styles.viewText}>Assamese</Text></View>
                <View style = {styles.view6}><Text style = {styles.viewText2}>Mathematics</Text></View>
                </View>
                </ScrollView>
                <ScrollView style={styles.scrollview}>
                <View style = {styles.container}>
                <Text style = {styles.nb}>Notice Board</Text>
                <View style = {styles.nbv}><Text style = {{padding : 10}}>ABC</Text></View>
                <View style = {styles.nbv2}><Text style = {{padding : 10}}>xyz</Text></View>
                </View>
                </ScrollView>
                <ScrollView style = {styles.scrollview}>
                 
            </ScrollView>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        backgroundColor : '#ffffff',
       // padding : 25,
        width : RFValue(333)
    },
    view2 : {
        flex : 1,
        backgroundColor : '#C0C9CC',
        padding : 10,
        borderRadius : 15,
        height : RFValue(510),
        marginTop : 25,
        marginLeft : 30,
        marginRight : 30
        
    },
    view3 : {
        backgroundColor : '#B5E5CF',
        borderRadius : 25,
        height : RFValue(110),
        width :RFValue(230),      
        marginLeft : RFValue(20),
        paddingLeft : 4
    },
    view4 : {
        backgroundColor : '#FAD02C',
        borderRadius : 25,
        height : RFValue(110),
        width :RFValue(230),      
        marginLeft : RFValue(20),
        marginTop : 20,
    },
    view5 : {
        backgroundColor : '#333652',
        borderRadius : 25,
        height : RFValue(110),
        width :RFValue(230),      
        marginLeft : RFValue(20),
        marginTop : 20
    },
    view6 : {
        backgroundColor : '#E6C2BF',
        borderRadius : 25,
        height : RFValue(110),
        width :RFValue(230),      
        marginLeft : RFValue(20),
        marginTop : 20
    },
    text : {
        fontSize : RFValue(25),
        fontWeight : 'bold',
        color : '#C15B78',
        marginTop : 30,
        marginLeft : 20
    },
    button : {
        backgroundColor : '#FEFCFF',
        borderRadius : 8,
        width : RFValue(200),
        height : 50,
        justifyContent: "center",
         alignItems: "center",
         shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    },
    buttonText : {
        fontSize : RFValue(20),
        fontWeight : '300',
        color : '#313E61',
        margin : 3
    },
    scrollview : {
        flex: 1,
        backgroundColor: "#fff"
    },
    viewText : {
        fontSize : 20,
        color : '#ffffff',
        paddingTop : 90,
        paddingLeft : 20
    },
    viewText2 : {
        fontSize : 20,
        color : '#282120',
        paddingTop : 90,
        paddingLeft : 20
    },

    container : {
        flex : 1,
        backgroundColor : '#183A50',
        padding : 10,
        borderRadius : 15,
        height : 200,
        marginTop : 20,
        marginLeft : 30,
        marginRight : 30,
        marginBottom : 20
    },
    nb : {
        fontSize : 25,
        color : '#ffffff',
        paddingTop : 5,
        paddingLeft : 10,
        fontWeight : '300'
    },
    nbv : {
        backgroundColor : '#BB616C',
        borderRadius : 25,
        height : 50,
        width : 150,
        marginTop : 20
    },
    nbv2 : {
        backgroundColor : '#CDBDB2',
        borderRadius : 25,
        height : 50,
        width : 150,
        marginTop : 20,
        marginLeft : 80
    },
    header : {
        fontSize : 35,
        color : '#4D0011',
        paddingTop : RFValue(90),
        paddingLeft : RFValue(20)   
    }
})