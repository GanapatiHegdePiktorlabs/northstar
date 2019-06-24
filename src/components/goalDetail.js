import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import defaultPhoto from '../../images/defaultPhoto.png';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const dbConfig = require('../../server/configs/database.config');
class GoalDetails extends Component {
    state = {
        data: [],

    }
    componentDidMount() {
        axios.get(`${dbConfig.ipAddress}api/goal/${this.props.navigation.state.params.itemId}`)
        .then(
          response => { this.setState({ data: response.data }); }
          )
        .catch(
          err => { console.log(err);
    });
    }
    showHighImpactValue(isHighImpact) {
      if (isHighImpact) {
      return (<Text style={styles.text}>True</Text>); 
      } else {
      return (<Text style={styles.text}>False</Text>);
      }
    }
    render() {
      return (
            <ScrollView>
            <View style={styles.GoalDetailsContainer}>
              <Text style={styles.headingText}>Goal Name</Text>
              <Text style={styles.text}>{this.state.data.name}</Text>
              <Text style={styles.headingText}>Goal Description</Text>
              <Text style={styles.text}>{this.state.data.description}</Text>
              <Text style={styles.headingText}>Complete By</Text>
              <Text style={styles.text}>{this.state.data.dueOn}</Text>
              <Text style={styles.headingText}>Goal Type</Text>
              <Text style={styles.text}>Project Goals</Text>
              <Text style={styles.headingText}>Progress</Text>
              <Text style={styles.text}>{this.state.data.percentage}%</Text>
              <Text style={styles.headingText}>High Impact</Text>
              {this.showHighImpactValue(this.state.data.isHighImpact)}
              <Text style={styles.headingText}>Public</Text>
              <Text style={styles.text}>False</Text>
              <Text style={styles.headingText}>Created By</Text>
                    <View style={styles.memberInfoStyle}>
                      <View style={{ width: 20, height: 20, marginRight: 10 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={defaultPhoto} />
                      </View>
                        {this.state.data.createdBy && <Text>{ this.state.data.createdBy.userName}</Text>}
                    </View>
                <Text style={styles.headingText}>Assign To</Text>
                    <View style={styles.memberInfoStyle}>
                      <View style={{ width: 20, height: 20, marginRight: 10 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={defaultPhoto} />
                      </View>
                      {this.state.data.createdBy && <Text>{ this.state.data.createdBy.userName}</Text>}
                    </View>      
            </View>
        </ScrollView>
        );
    }
}
const styles = {
    headingText: {
        paddingTop: 16,
        color: '#aaaaaa',
        fontSize: 12,
    },
    text: {
        paddingTop: 8,
        fontSize: 16,
        color: '#000000',
    },
    GoalDetailsContainer: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 16,
        paddingRight: 16
    },
    memberInfoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
}
export default GoalDetails;