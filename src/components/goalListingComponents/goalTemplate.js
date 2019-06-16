import React, { Component } from 'react';
import { Text , View  } from 'react-native';


class GoalListing extends Component {
    render() {
        return (
            <View style = {styles.contaierStyle}>
                <Text style  = {styles.taskName}>{this.props.data[0].name}</Text>
                <View style  = {styles.statusStyle}>
                <Text>{this.props.data[0].percentage}</Text>
                <Text>exp by {this.props.data[0].expDay} days</Text>
                </View>
                
            </View>
          
        );
    }
}
const styles = {
    contaierStyle:{
        flexDirection:'column',
        margin:20
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