import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import EditIcon from '../../images/edit-white.png';
import FeedSample from '../components/feedSample';
import { Icon } from 'react-native-elements';
import RangeSlider from "rn-range-slider";
// import AddIcon from '../../images/add2x.png';
import Input from './common/input';
import MemberInfo from '../components/common/memberInfo';

const dbConfig = require('../../server/configs/database.config.js');




class GoalLandingDetail extends Component {
    state={ detailData: [], feedDetail: [], updateText: '' }

    static navigationOptions = ({ navigation }) => {
        console.log(navigation.getParam('goalName'))
        return {
            title: navigation.getParam('goalName')
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ goalName: '' });
        this.fetchGoalDetail();
        this.fetchFeedDetail();
    }

    editGoal = (sliderValue) => {
        console.log('inside edit goal');
        AsyncStorage.getItem('userId')
        .then(id => {
            if (id) {
                axios.put(`${dbConfig.ipAddress}api/editGoal/${this.state.detailData._id}`, {
                    name: this.state.detailData.name,
                    description: this.state.detailData.description,
                    isHighImpact: this.state.detailData.isHighImpact,
                    dueOn: this.state.detailData.dueOn,
                    percentage: sliderValue,
                    isCompleted: (sliderValue === 100)
                })
                .then(res => {
                    console.log(res);
                    // console.log(this.props);
                    // this.props.navigation.navigate('Home'); 
                })
                .catch(err => {
                    console.log(err);
                });
            }
        });
    }

    fetchGoalDetail = () => {
        axios
            .get(`${dbConfig.ipAddress}api/goal/${this.props.navigation.state.params.itemId}`)
            .then(res => {
                console.log('res', res);
                this.setState({ detailData: res.data, initialSliderValue: res.data.percentage });
                this.refs._rangeSlider.setLowValue(this.state.detailData.percentage);
                this.props.navigation.setParams({ goalName: res.data.name.toUpperCase() });
            })
            .catch(e => console.log(e));
    }

    fetchFeedDetail = () => {
        axios
            .get(`${dbConfig.ipAddress}api/feed/${this.props.navigation.state.params.itemId}`)
            .then(res => { console.log('res2', res); this.setState({ feedDetail: res.data }) })
            .catch(e => console.log(e));
    }

    postAnUpdate = () => {
        const data = {
            goalId: this.props.navigation.state.params.itemId,
            userName: this.state.detailData.createdBy.userName,
            feedBody: this.state.updateText,
            createdOn: this.state.feedDetail.createdOn,
        };
        axios
            .post(`${dbConfig.ipAddress}api/createfeed`, data)
            .then(() => {
                this.setState({ feedDetail: [] });
                this.fetchFeedDetail();
            })
            .catch(e => console.log('----', e));
    }

    updateSlider(data){
        return (data.percentage);
    }
    
    render() {
        const { navigation, } = this.props;
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerStyle}>
                    <Text style={styles.headingColor}>Test</Text>
                    <View style={styles.editSectionStyle}>
                        <Text style={{ color: 'aqua' }} onPress={() => navigation.navigate('GoalDetails', { itemId: this.state.detailData._id })}>View Details</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CreateGoalPage', { itemId: this.state.detailData._id, goalDetails: this.state.detailData, edit: 'true',title:'Edit Goal' })}>
                            <Image source={EditIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.progressSection}>
                    <RangeSlider 
                        ref="_rangeSlider"
                        style={{ width: 200, height: 60 }}
                        min={0}
                        rangeEnabled={false}
                        thumbBorderWidth={12}
                        lineWidth={15}
                        step={1}
                        labelBorderWidth={1}
                        labelBorderRadius={1}
                        selectionColor="#B46BAB"
                        blankColor="#fafafa"
                        disableRange
                        onValueChanged={(low) => {
                            this.editGoal(low);
                        }}
                    />
                    <View >
                        <Text style={styles.completionDateHeader}>Completed By</Text>
                        <Text style={styles.completionDateContainer}>{this.state.detailData && moment.utc(this.state.detailData.dueOn).format('MMM DD')}</Text>
                    </View>
                </View>
                <View style={styles.upadatePostSec}>
                    {/* <Text>Post an update...</Text> */}
                    <TextInput value={this.state.updateText} onChangeText={text => this.setState({ updateText: text })} style={styles.inputBox} placeholder='Post an update...' />
                    <TouchableOpacity onPress={() => this.postAnUpdate()}>
                        <Icon name='md-add-circle-outline' type='ionicon' color='#00afff' />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {(this.state.feedDetail.length) ? this.state.feedDetail.map(item => <FeedSample item={item} />) : <Text style={styles.noDataText}>No Feeds</Text>}
                </ScrollView>


            </View>
        );
    }
}
const styles = {

    inputBox: {
        width: '80%',
        padding: 4
    },
    containerStyle: {
        backgroundColor: '#eee',
        height: '100%',
    },
    headerStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#424372',
    },
    editSectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    progressSection: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 20,
        alignItems: 'center',
        paddingRight: 20,
        paddingBottom: 10,
        backgroundColor: '#424372',
        opacity: 0.9,


    },
    completionDateContainer: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 16,
    },
    completionDateHeader: {
        color: '#fff',
        fontSize: 10,
    },
    addMemberSec: {
        width: '100%',
        backgroundColor: '#ccc',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',

    },
    upadatePostSec: {
        backgroundColor: '#fff',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 3,
        paddingRight: 5,
        paddingLeft: 5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
    },
    headingColor: {
        color: '#fff'
    },
    noDataText: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        margingTop: 10,
        width: '89%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    }

};

export default GoalLandingDetail;
