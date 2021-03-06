import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import WorkoutLabel from '../components/WorkoutLabel';
import Button from '../components/Button';

import * as serverMethods from '../ServerMethods';
import light from '../light';
import dark from '../dark';

export default class WorkoutPlans extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            workoutPlans: [],
        }
    }

    componentDidMount() {
        serverMethods.getUserWorkoutPlans(this.state.username)
            .then(response => response.json())
            .then(response => {
                this.setState({ workoutPlans: response })
            })
            .catch(err => console.log(err));
        this.listener = this.props.navigation.addListener('focus', () => {
            setTimeout(() => serverMethods.getUserWorkoutPlans(this.state.username)
                .then(response => response.json())
                .then(response => {
                    this.setState({ workoutPlans: response })
                })
                .catch(err => console.log(err)), 500)
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        let workoutPlanList = [];
        for (let i = 0; i < this.state.workoutPlans.length; i++) {
            let workoutPlan = this.state.workoutPlans[i];
            workoutPlanList.push(
                <WorkoutLabel
                    key={i}
                    name={workoutPlan}
                    darkmode={this.props.darkmode}
                    edit={() => this.props.navigation.navigate('WorkoutPlanEditor', { username: this.state.username, workoutPlan: workoutPlan, edit: true })} //server call to get workouts given name
                />
            );
        }
        return(
            <View style={this.props.darkmode ? dark.workoutsContainer : light.workoutsContainer}>
                <ScrollView style={this.props.darkmode ? dark.workoutList : light.workoutList} contentContainerStyle={{alignItems: 'center'}}>
                    <Text style={[{fontSize: 15}, this.props.darkmode ? dark.text : light.text]}>{(this.state.workoutPlans.length !== 0) ? "" : "Create a new workout plan to get started!"}</Text>
                    {workoutPlanList}
                </ScrollView>
                <Button
                    buttonText='Create New Workout Plan'
                    onPress={() => this.props.navigation.navigate('WorkoutPlanEditor', { username: this.state.username })}
                    //maybe add a thing to make sure there are enough workouts?
                    darkmode={this.props.darkmode}
                    style={{marginBottom: 30}}
                    purple={true}
                />
            </View>
        );
    }
}