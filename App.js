/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoalListing from './src/components/goalListing';
import CreateGoalPage from './src/components/createGoal';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

class App extends Component {
  static navigationOptions = ({ navigation }) => 
  ({
    headerTitle: 'Home',
    headerRight: (
      <Icon
        name='add'
        size={36}
        color='#e20074'
        onPress={() => navigation.navigate('CreateGoalPage')}
      />
    )
  });
  componentWillMount() {
    const { setParams } = this.props.navigation;
    setParams({ websiteURL: this.props.websiteURL });
  }
  render() {
    return (
      <View style={styles.container}>
        <GoalListing />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
    Home: {
      screen: App,
    },
    CreateGoalPage: {
      screen: CreateGoalPage,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
