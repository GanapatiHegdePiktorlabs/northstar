import React, { Component } from 'react';
import { Text , View , Image } from 'react-native';
import plusIcon from '../../../images/add.png';
// import minusIcon from '.././../images/minus.png';


class GoalHeader extends Component {
    render() {
        return (
            <View style = {styles.containerStyle}>
                <Text>hi</Text>
              <Image style = {{width:20,height:20}} source = {plusIcon}/>
               
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
        
    }
}
export default GoalHeader