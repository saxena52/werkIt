import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'

import Button from '../components/Button';
import WorkoutLabel from '../components/WorkoutLabel';
import * as serverMethods from '../ServerMethods';

import light from '../light';
import dark from '../dark/';

export default class Workouts extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            workouts: [],
            currWorkout: '',
        };

        this.createWorkout = this.createWorkout.bind(this);
    }

    componentDidMount() {
        // server call to get workouts related to user
        serverMethods.getUserWorkouts(this.state.username)
            .then(response => response.json())
            .then(response => {
                this.setState({ workouts: response })
            })
            .catch(err => console.log(err));
        this.listener = this.props.navigation.addListener('focus', () => {
            setTimeout(() => serverMethods.getUserWorkouts(this.state.username)
                .then(response => response.json())
                .then(response => {
                    this.setState({ workouts: response })
                })
                .catch(err => console.log(err)), 300)
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    editWorkout(workout) {
        this.setState({ currWorkout: workout });
        //find current workout in the this.state.workouts
    }

    createWorkout(workout) {
        if (workout.name !== undefined) {
            //server call to add new workout to database (maybe do this in workout editor?)
        let newArray = this.state.workouts.map(workout => workout);
        newArray.push({ name: workout.name, exercises: workout.exercises });

        this.setState({ workouts: newArray });
        }
    }

    render() {
        let workoutList = [];
        for (let i = 0; i < this.state.workouts.length; i++) {
            let workout = this.state.workouts[i];
            workoutList.push(
                <WorkoutLabel
                    key={i}
                    name={workout}
                    darkmode={this.props.darkmode}
                    edit={() => this.props.navigation.navigate('WorkoutEditor', { username: this.state.username, workout: workout, edit: true })} //server call to get exercises given name
                />
            );
        }
        return(
            <View style={this.props.darkmode ? dark.workoutsContainer : light.workoutsContainer}>
                {/* <View style={{borderColor: "#000000", borderBottomWidth: 2, marginTop: 10, width: '75%', alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>Workouts</Text>
                </View> */}
                <ScrollView style={this.props.darkmode? dark.workoutList : light.workoutList} contentContainerStyle={{alignItems: 'center'}}>
                    <Text style={[{fontSize: 15}, this.props.darkmode ? dark.text : light.text]}>{(this.state.workouts.length !== 0) ? "" : "Create a new workout to get started!"}</Text>
                    {workoutList}
                </ScrollView>
                <Button
                    buttonText='Create New Workout'
                    onPress={() => this.props.navigation.navigate('WorkoutEditor', { username: this.state.username })}
                    style={{marginBottom: 30}}
                    darkmode={this.props.darkmode}
                    purple={true}
                />
            </View>
        );
    }
}