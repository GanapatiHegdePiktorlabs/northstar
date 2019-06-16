/**
 * Create Goal Page
 * Use this Page to create or edit Goals
 */

import React, { Component } from 'react';
import { Button, View } from 'react-native'; 


class CreateGoalPage extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Save"
                    color="#424372"
                />
                <Button
                    title="Delete"
                    color="#FFF"
                />
            </View>
        );
    }
}

export default CreateGoalPage;
