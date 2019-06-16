import React, { Component } from 'react';
import { Text , View , Image } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import GoalTemplate from './goalListingComponents/goalTemplate';
import plusIcon from '../../images/add.png';
import minusIcon from '../../images/remove.png';



// import GoalHeader from './goalListingComponents/goalHeader';


class GoalListing extends Component {
    constructor() {
        super();
        this.state = { collapsed: false };
      }
    renderImage(){
        if(!this.state.collapsed){
            return (<Image style={ styles.iconStyle } source={plusIcon}></Image>);
        }else{
            return (<Image style={ styles.iconStyle } source={minusIcon}></Image>);
        }
      }
    render() {
        return (
            <View>
            <Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>
              <CollapseHeader style={styles.containerStyle} >
              <View style={styles.containerContentStyle} >
              <Text>Your Expired Goals</Text>
              {this.renderImage()}
              </View>
                  
              </CollapseHeader>
              <CollapseBody>
             <GoalTemplate data = {expData}></GoalTemplate>
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
        percentage : '30',
        expDay:161,
        daysRemaining:-100
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
export default GoalListing