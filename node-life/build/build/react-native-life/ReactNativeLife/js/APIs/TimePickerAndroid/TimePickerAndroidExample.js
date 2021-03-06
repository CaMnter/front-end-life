/**
 * @author CaMnter
 */


import React, {Component} from 'react';
import {
    TimePickerAndroid,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    ToastAndroid
} from 'react-native';

import RNTesterPage from '../../../RNTester/js/RNTesterPage';
import RNTesterBlock from '../../../RNTester/js/RNTesterBlock';

class TimePickerAndroidExample extends Component {

    static title = 'TimePickerAndroid';
    static description = 'Standard Android time picker dialog';

    state = {
        isoFormatText: 'pick a time (24-hour format)',
        presetHour: 4,
        presetMinute: 4,
        presetText: 'pick a time, default: 4:04AM',
        simpleText: 'pick a time'
    };

    showPicker = async (stateKey, options) => {
        try {
            const {action, minute, hour} = await TimePickerAndroid.open(options);
            let newState = {};
            if (action == TimePickerAndroid.timeSetAction) {
                newState[stateKey + 'Text'] = _formatTime(hour, minute);
                newState[stateKey + 'Hour'] = hour;
                newState[stateKey + 'Minute'] = minute;
            } else if (action === TimePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            }
            this.setState(newState);
        } catch ({code, message}) {
            ToastAndroid.show(`Error in example '${stateKey}': `, message, ToastAndroid.SHORT);
        }
    };

    render() {
        return (
            <RNTesterPage title='TimePickerAndroid examples'>

                <RNTesterBlock title='Simple time picker'>
                    <TouchableWithoutFeedback
                        onPress={this.showPicker.bind(this, 'simple', {})}>
                        <Text style={styles.text}>{this.state.simpleText}</Text>
                    </TouchableWithoutFeedback>
                </RNTesterBlock>

                <RNTesterBlock title="Time picker with pre-set time">
                    <TouchableWithoutFeedback
                        onPress={this.showPicker.bind(this, 'preset', {
                            hour: this.state.presetHour,
                            minute: this.state.presetMinute,
                        })}>
                        <Text style={styles.text}>{this.state.presetText}</Text>
                    </TouchableWithoutFeedback>
                </RNTesterBlock>

                <RNTesterBlock title="Time picker with 24-hour time format">
                    <TouchableWithoutFeedback
                        onPress={this.showPicker.bind(this, 'isoFormat', {
                            hour: this.state.isoFormatHour,
                            minute: this.state.isoFormatMinute,
                            is24Hour: true
                        })}>
                        <Text style={styles.text}>{this.state.isoFormatText}</Text>
                    </TouchableWithoutFeedback>
                </RNTesterBlock>

            </RNTesterPage>
        );
    }

}

/**
 * Returns e.g. '3:05'.
 */
function _formatTime(hour, minute) {
    return hour + ':' + (minute < 10 ? '0' + minute : minute);
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
    }
});

module.exports = TimePickerAndroidExample;