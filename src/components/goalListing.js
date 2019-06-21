import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import GoalTemplate from './goalListingComponents/goalTemplate';
import plusIcon from '../../images/add.png';
import minusIcon from '../../images/remove.png';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GoalDetails from './goalDetail';
import GoalIndividualist from './goalListingComponents/goalIndividualist';
import axios from 'axios';
import moment from 'moment';

const dbConfig = require('../../server/configs/database.config');

// import GoalHeader from './goalListingComponents/goalHeader';


class GoalListing extends Component {
   state={ completedGoalList: [], inProgressGoalList: [], expireGoalList: [], userId: AsyncStorage.getItem('userId') }

   componentWillUpdate() {
    AsyncStorage.getItem('userId')
    .then(res => {
        if (res) {
            axios.get(`${dbConfig.ipAddress}api/getGoals/${res}`)
            .then(response=>{
                let complete = [], inprogress = [], expire = [];
                for(let item of response.data){
                    if(item.percentage==100) {
                        complete.push(item);
                    } else if (item.percentage<100 && moment(item.dueOn).isBefore(moment())) {
                        expire.push(item);
                    } else if(item.percentage<100){
                        inprogress.push(item);
                    }
                } this.setState({ completedGoalList: complete, inProgressGoalList: inprogress, expireGoalList: expire });
            }).catch(err => {
                console.log(err);
            });
        }
    });
   }
   
    render() {
      return (
            <View>
                <GoalIndividualist title="Your Expired Goals" navigation={this.props.navigation} onPress={this.props.onPress} expData={this.state.expireGoalList} goalCount={this.state.expireGoalList.length}></GoalIndividualist>
                <GoalIndividualist title="Your Completed Goals" navigation={this.props.navigation} onPress={this.props.onPress} expData={this.state.completedGoalList} goalCount={this.state.completedGoalList.length}></GoalIndividualist>
                <GoalIndividualist title="Your In progress Goals" navigation={this.props.navigation} onPress={this.props.onPress} expData={this.state.inProgressGoalList} goalCount={this.state.inProgressGoalList.length}></GoalIndividualist>
            </View>
        );
    }
}
// const styles = {
//     containerStyle: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         height: 40,
//         paddingLeft: 16,
//         paddingRight: 16,
//         backgroundColor: '#eee',
//         shadowColor: 'black',
//         shadowOpacity: 0.1,

//     },
//     iconStyle: {
//         height: 20,
//         width: 20
//     },
//     containerContentStyle: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%'
//     }
// }
// const expData = [
//     {
//         name: "Expired Goal",
//         description: "test",
//         createdBy: "Abhijeet Kumar",
//         createdFor: "Ganapati",
//         taskType: "Project Goals",
//         isHighImpact: 'no',
//         isPublic: 'no',
//         isCompleted: 'no',
//         percentage: 30,
//         expDay: 161,
//         daysRemaining: 30,
//         dueOn: '2019-06-15T04:18:21.931Z'
//     },
// ]
// const inProgressGoalData = [
//     {
//         name: "In progress goal",
//         description: "test2",
//         createdBy: "Abhijeet Kumar",
//         createdFor: "Ganapati",
//         taskType: "Project Goals",
//         isHighImpact: 'no',
//         isPublic: 'no',
//         isCompleted: 'no',
//         percentage: 99,
//         expDay: 161
//     },
// ]
const RootStack = createStackNavigator({
    CreateGoalPage: {
        screen: GoalDetails,
    },
},
);
export default GoalListing;
