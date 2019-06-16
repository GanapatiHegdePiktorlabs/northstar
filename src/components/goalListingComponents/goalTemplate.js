import React, { Component } from 'react';
import { Text , View  } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';


class GoalListing extends Component {
    setColor(daysRemaining){
        if(daysRemaining < 0){
          return ("red")
        }else{
            return ("pink")
            
        }
    }
    render() {
        return (
            <View style = {styles.goalTemplateStyle}>
            <View style = {styles.contaierStyle}>
                <Text style  = {styles.taskName}>{this.props.data[0].name}</Text>
                <View style  = {styles.statusStyle}>
                <Text>{this.props.data[0].percentage} % |</Text>
                <Text>Exp by {this.props.data[0].expDay} days</Text>
                </View>
            </View>
            <ProgressCircle percent={this.props.data[0].percentage} radius={20} borderWidth={8} color={this.setColor(this.props.data[0].daysRemaining)}  shadowColor='#fafafa' bgColor="#fff"></ProgressCircle>
            </View>
            
          
        );
    }
}
const styles = {
    goalTemplateStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
        opacity:0.5
    },
    
    contaierStyle:{
        flexDirection:'column',
    },
    statusStyle:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    taskName:{
        textTransform: 'capitalize',
        letterSpacing: -0.5,
        // fontWeight: 600,
        width: '100%',
    }
}

export default GoalListing