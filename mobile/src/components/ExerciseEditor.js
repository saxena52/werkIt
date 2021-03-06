import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, Keyboard } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

import TextBox from './TextBox';
import HideableView from './HideableView';

import light from '../light';
import dark from '../dark';
import { createExerciseError, missingNameError } from './Alerts';
import Button from './Button';

export default class ExerciseEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            // sets: this.props.sets,
            // reps: this.props.reps,
            // weight: this.props.weight,
            // duration: this.props.duration,
            // distance: this.props.distance,
            // pace: this.props.pace,
            // incline: this.props.incline,
            // laps: this.props.laps
            selectedFields: [],
        };
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View /*style={styles.exerciseEditorContainer}*/>
                    <TextBox
                        placeholder='Name'
                        onChangeText={(text) => this.setState({ name: text })}
                        style={{width: '100%'}}
                        darkmode={this.props.darkmode}
                        value={this.state.name}
                    />
                    <Text style={this.props.darkmode ? dark.text : light.text}>Select all that apply:</Text>
                    <SelectMultiple
                        items={['Sets', 'Reps', 'Weight', 'Duration', 'Distance', 'Pace', 'Incline', 'Laps']}
                        selectedItems={this.state.selectedFields}
                        style={{marginTop: 10}}
                        rowStyle={{padding: 10, backgroundColor: this.props.darkmode ? '#3E3E3E' : '#FFFFFF'}}
                        checkboxStyle={{width: 20, height: 20, backgroundColor: this.props.darkmode ? '#3E3E3E' : '#FFFFFF'}}
                        selectedCheckboxStyle={{backgroundColor: this.props.darkmode ? '#FFFFFF' : null }}
                        labelStyle={{marginLeft: 5, color: this.props.darkmode ? '#FFFFFF' : '#000000'}}
                        onSelectionsChange={(items) => this.setState({ selectedFields: items })}
                    />
                    {/* <HideableView
                        name='Sets: '
                        onChangeText={(text) => this.setState({ sets: text })}
                        value={this.state.sets}
                        maxLength={2}
                        style={{width: 33}}
                        visible={true}
                    />
                    <HideableView
                        name='Reps: '
                        onChangeText={(text) => this.setState({ reps: text })}
                        value={this.state.reps}
                        visible={true}
                    />
                    <HideableView
                        name='Weight: '
                        onChangeText={(text) => this.setState({ weight: text })}
                        style={{width: 60}}
                        value={this.state.weight}
                        visible={true}
                    />
                    <HideableView
                        name='Duration: '
                        onChangeText={(text) => this.setState({ duration: text })}
                        style={{width: 60}}
                        value={this.state.duration}
                        visible={true}
                    />
                    <HideableView
                        name='Distance: '
                        onChangeText={(text) => this.setState({ distance: text })}
                        style={{width: 60}}
                        value={this.state.distance}
                        visible={true}
                    />
                    <HideableView
                        name='Pace: '
                        onChangeText={(text) => this.setState({ pace: text })}
                        value={this.state.pace}
                        visible={true}
                    />
                    <HideableView
                        name='Incline: '
                        onChangeText={(text) => this.setState({ incline: text })}
                        value={this.state.incline}
                        visible={true}
                    />
                    <HideableView
                        name='Laps: '
                        onChangeText={(text) => this.setState({ laps: text })}
                        value={this.state.laps}
                        visible={true}
                    /> */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30}}>
                        <Button
                            buttonText='Cancel'
                            onPress={() => this.props.dismiss()}
                            style={{width: '35%', marginRight: 20}}
                            darkmode={this.props.darkmode}
                            orange={true}
                        />
                        <Button
                            buttonText='Submit'
                            onPress={() => {
                                if (this.state.selectedFields.length === 0) {
                                    createExerciseError();
                                } else if (this.state.name === '') {
                                    missingNameError();
                                } else {
                                    //'Sets', 'Reps', 'Weight', 'Duration', 'Distance', 'Pace', 'Incline', 'Laps'
                                    let exercise = {name: this.state.name, sets: false, reps: false, weight: false, duration: false, distance: false, pace: false, incline: false, laps: false};
                                    for (let i = 0; i < this.state.selectedFields.length; i++) {
                                        switch(this.state.selectedFields[i].value) {
                                            case 'Sets':
                                                exercise.sets = true;
                                                break;
                                            case 'Reps':
                                                exercise.reps = true;
                                                break;
                                            case 'Weight':
                                                exercise.weight = true;
                                                break;
                                            case 'Duration':
                                                exercise.duration = true;
                                                break;
                                            case 'Distance':
                                                exercise.distance = true;
                                                break;
                                            case 'Pace':
                                                exercise.pace = true;
                                                break;
                                            case 'Incline':
                                                exercise.incline = true;
                                                break;
                                            case 'Laps':
                                                exercise.laps = true;
                                                break;
                                        }
                                    }
                                    this.props.createExercise(exercise); 
                                    //make a call to helper function to server call to create new exercise
                                }
                            }}
                            style={{width: '35%', marginLeft: 20}}
                            darkmode={this.props.darkmode}
                            orange={true}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}