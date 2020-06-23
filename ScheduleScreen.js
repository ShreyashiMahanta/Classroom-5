import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
//import db from '../config';

export default class ScheduleScreen extends Component{
    constructor(){
        super();
        this.state = {
            student_name : "",
            grade : "",
            section : "",
            roll_number : "" ,
            current_subject : "",
            current_teacher : "",
            today_schedule : "",
            first_period : "",
            second_period : "",
            third_period : "",
            fourth_period : "",
            scheduleNotGiven : "",
            link1 : "",
            link2 : "",
            link3 : "",
            link4 : "",
        }
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
        first_period : first_period,
        second_period : second_period,
        third_period : third_period,
        fourth_period : fourth_period,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    displayLinkForToday = () =>{
        db.collection("student")
    .add({
        link1 : link1,
        link2 : link2,
        link3 : link3,
        link4 : link4,
        })
    }
    render(){
    if(this.state.scheduleNotGiven === true){
        return(
            <View style = {styles.container}>
                <MyHeader
                title = "Schedule"
                />
                <ScrollView style={styles.scrollview}>
                 <View style = {styles.view3}>
                    <Text style = {styles.viewText2}>No Schedule!</Text>
                    </View>
                <View style = {styles.view4}><Text style = {styles.viewText2}>No Schedule!</Text></View>
                <View style = {styles.view5}><Text style = {styles.viewText}>No Schedule!</Text></View>
                <View style = {styles.view6}><Text style = {styles.viewText2}>No Schedule!</Text></View>                           
                </ScrollView>
               </View>
        )

    }
    else{
        return(
            <View style = {styles.container}>
                <MyHeader
                title = "Schedule"
                />
                <ScrollView style={styles.scrollview}>
                 <View style = {styles.view3}>
                    <Text style = {styles.viewText2}>{this.state.first_period}</Text>
                    </View>
                <View style = {styles.view4}><Text style = {styles.viewText2}>{this.state.second_period}</Text></View>
                <View style = {styles.view5}><Text style = {styles.viewText}>{this.state.third_period}</Text></View>
                <View style = {styles.view6}><Text style = {styles.viewText2}>{this.state.fourth_period}</Text></View>               
                
                </ScrollView>
               </View>
        )}
           }
                }
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#B4F8C8',
        width : RFValue(333)

    },
    header : {
        fontSize : RFValue(30),
        fontWeight : 'bold',
        color : '#FFAEBC',
        padding : 5
    },
    view : {
        width: 290,
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:3,
        marginTop : 300
    }
})