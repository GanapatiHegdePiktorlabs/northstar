import React, { Component } from 'react';
import { Text , View  } from 'react-native';


class GoalDetails extends Component {
    render() {
        return (
            <View style = {styles.GoalDetailsContainer}>
              <Text style = {styles.headingText}>Goal Name</Text>
              <Text style = {styles.text}>New Northstar</Text>
              <Text style = {styles.headingText}>Goal Description</Text>
              <Text style = {styles.text}>New Northstar Description</Text>
              <Text style = {styles.headingText}>Complete By</Text>
              <Text style = {styles.text}>06/10/2019</Text>
              <Text style = {styles.headingText}>Goal Type</Text>
              <Text style = {styles.text}>Project Goals</Text>
              <Text style = {styles.headingText}>Progress</Text>
              <Text style = {styles.text}>48%</Text>
              <Text style = {styles.headingText}>High Impact</Text>
              <Text style = {styles.text}>Public</Text>
              <Text style = {styles.headingText}>No</Text>
              <Text style = {styles.headingText}>Created By</Text>
              <Text style = {styles.text}>Abhijeet kumar</Text>
            </View>
        );
    }
}
const styles = {
    headingText :{
        paddingTop: 16,
        color: '#aaaaaa',
        fontSize: 12,
    },
    text:{
        paddingTop: 8,
        fontSize: 16,
        color: '#000000',
    },
    GoalDetailsContainer:{
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:16,
        paddingRight:16
    }
}
export default GoalDetails