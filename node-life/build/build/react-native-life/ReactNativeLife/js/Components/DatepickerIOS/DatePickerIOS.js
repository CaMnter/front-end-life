/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {DatePickerIOS, Text, TextInput, View, StyleSheet} from "react-native";

class WithLabel extends Component {

    render() {
        return (
            <View style={styles.labelContainer}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>
                        {this.props.label}
                    </Text>
                </View>
                {this.props.children}
            </View>
        );
    }

}

class Heading extends Component {

    render() {
        return (
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    {this.props.label}
                </Text>
            </View>
        );
    }

}


class SimpleDatePicker extends Component {

    static defaultProps = {
        date: new Date(),
        timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };

    state = {
        date: this.props.date,
        timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    };

    onDateChange = (date) => {
        this.setState({date: date});
    };

    onTimezoneChange = (event) => {
        let offset = parseInt(event.nativeEvent.text, 10);
        if (isNaN(offset)) {
            return;
        }
        this.setState({timeZoneOffsetInHours: offset});
    };

    render() {
        return (
            <View>
                <WithLabel label="Value:">
                    <Text>
                        {
                            this.state.date.toLocaleDateString() +
                            ' ' +
                            this.state.date.toLocaleTimeString()
                        }
                    </Text>
                </WithLabel>
                <WithLabel label="Timezone:">
                    <TextInput
                        onChange={this.onTimezoneChange}
                        style={styles.textInput}
                        value={this.state.timeZoneOffsetInHours.toString()}/>
                    <Text> hours from UTC</Text>
                </WithLabel>
                <Heading label="Date + time picker"/>
                <DatePickerIOS
                    date={this.state.date}
                    mode="datetime"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}/>
                <Heading label="Date picker"/>
                <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}/>
                <Heading label="Time picker, 10-minute interval"/>
                <DatePickerIOS
                    date={this.state.date}
                    mode="time"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                    minuteInterval={10}/>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    textInput: {
        height: 26,
        width: 50,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4,
        fontSize: 13,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    labelView: {
        marginRight: 10,
        paddingVertical: 2,
    },
    label: {
        fontWeight: '500',
    },
    headingContainer: {
        padding: 4,
        backgroundColor: '#f6f7f8',
    },
    heading: {
        fontWeight: '500',
        fontSize: 14,
    },
});


module.exports = {
    SimpleDatePicker: SimpleDatePicker
}