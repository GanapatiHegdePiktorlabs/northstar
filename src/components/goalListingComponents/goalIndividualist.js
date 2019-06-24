import React from 'react';
import { Text , View , Image } from 'react-native';
import plusIcon from '../../../images/add.png';
import minusIcon from '../../../images/remove.png';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import GoalTemplate from './goalTemplate';


class GoalIndividualist extends React.Component {
    state = { collapsed: true };

    renderImage() {
        if (!this.state.collapsed) {
            return (<Image style={styles.iconStyle} source={plusIcon}></Image>);
        } else {
            return (<Image style={styles.iconStyle} source={minusIcon}></Image>);
        }
    }

    render() {
        if(this.props.expData.length > 0){
            return (
                <Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed) => this.setState({ collapsed: isCollapsed })}>
                    <CollapseHeader style={styles.containerStyle}>
                        <View style={styles.containerContentStyle} >
                        <View style = {styles.titleStyle}>
                            <Text>{this.props.title}</Text>
                            <Text> ({this.props.goalCount})</Text>
                        </View>
                            {this.renderImage()}
                        </View>
    
                    </CollapseHeader>
                    <CollapseBody>
                        <View>{this.props.children}</View>
                        {this.props.expData.map(item=> <GoalTemplate data={item} navigation={this.props.navigation} onPress={this.props.onPress} />)}
                    </CollapseBody>
                </Collapse>
            );
        } else {
            return null;
        }
        
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
    },
    titleStyle:{
        flexDirection:'row'
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
        percentage : 30,
        expDay:161,
        daysRemaining:-100
    },
]

export default GoalIndividualist;