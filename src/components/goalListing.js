import React, { Component } from 'react';
import { Text , View , Image } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import GoalTemplate from './goalListingComponents/goalTemplate';
import plusIcon from '../../images/add.png';
import minusIcon from '../../images/remove.png';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GoalDetails from './goalDetail';





// import GoalHeader from './goalListingComponents/goalHeader';


class GoalListing extends Component {
    constructor() {
        super();
        this.state = { showSoundImg: true };
      }
    renderImage(){
        if(this.state.showSoundImg){
            return (<Image style={ styles.iconStyle } source={plusIcon}></Image>);
        }else{
            return (<Image style={ styles.iconStyle } source={minusIcon}></Image>);
        }
      }
      handleRoute(route){
       console.log(route) // >> x , y, z 
          }
      
    render() {
        return (
            <View>
            <Collapse>
              <CollapseHeader style={styles.containerStyle} onPress={ () => this.setState({ showSoundImg: !this.state.showSoundImg }) } >
              <View style={styles.containerContentStyle} >
              <Text>Your Expired Goals</Text>
              {this.renderImage()}
              </View>
                  
              </CollapseHeader>
              <CollapseBody>
             <GoalTemplate data = {expData} onPress = {this.props.onPress} ></GoalTemplate>
                </CollapseBody>
            </Collapse>

            <Collapse>
              <CollapseHeader style={styles.containerStyle}>
                    <Text>Your Completed Goals</Text>
              </CollapseHeader>
              <CollapseBody>
                        <GoalTemplate data = {inProgressGoalData}></GoalTemplate>
                </CollapseBody>
            </Collapse>
            <Collapse>
              <CollapseHeader style={styles.containerStyle}>
                    <Text>Your In progress Goals</Text>
              </CollapseHeader>
              <CollapseBody>
                        <Text>Aaron Bennet</Text>
                        <Text>Claire Barclay</Text>
                        <Text>Kelso Brittany</Text>
                </CollapseBody>
            </Collapse>
           </View>
        );
    }
}
const styles = {
    containerStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height: 40,
        paddingLeft:16,
        paddingRight:16,
        backgroundColor: '#eee',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        
    },
    iconStyle:{
        height:20,
        width:20
    },
    containerContentStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    }
}
const expData =[
    {
        name : "Expired Goal",
        description : "test",
        createdBy : "Abhijeet Kumar",
        createdFor : "Ganapati",
        taskType : "Project Goals",
        isHighImpact : 'no',
        isPublic : 'no',
        isCompleted : 'no',
        percentage : '99%',
        expDay:161
    },
]
const inProgressGoalData =[
    {
        name : "In progress goal",
        description : "test2",
        createdBy : "Abhijeet Kumar",
        createdFor : "Ganapati",
        taskType : "Project Goals",
        isHighImpact : 'no',
        isPublic : 'no',
        isCompleted : 'no',
        percentage : '99%',
        expDay:161
    },
]
const RootStack = createStackNavigator({
    CreateGoalPage: {
      screen: GoalDetails,
    },
  },
);
export default GoalListing