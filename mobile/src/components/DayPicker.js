import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class DayPicker extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flexDirection: 'row', zIndex: this.props.zIndex, marginBottom: 20}}>
                <Text style={{color: this.props.darkmode ? '#FFFFFF' : '#000000', marginTop: 10, marginRight: this.props.margin}}>{this.props.day}:</Text>
                <DropDownPicker
                    items={this.props.savedWorkouts}
                    defaultValue={this.props.defaultValue}
                    placeholder='Select a workout'
                    containerStyle={{height: 40, width: '50%'}}
                    style={{backgroundColor: this.props.darkmode ? '#6E6E6E' : '#FAFAFA'}}
                    itemStyle={{justifyContent: 'flex-start'}}
                    labelStyle={{color: this.props.darkmode ? '#FFFFFF' : '#000000'}}
                    dropDownStyle={{backgroundColor: this.props.darkmode ? '#6E6E6E' : '#FAFAFA'}}
                    arrowColor={this.props.darkmode ? '#FFFFFF' : '#000000'}
                    onChangeItem={(item) => {
                        this.props.select(item.value)
                    }}
                />
            </View>
        );
    }
}