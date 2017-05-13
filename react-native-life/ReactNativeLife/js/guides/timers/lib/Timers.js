/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import  {Text, ToastAndroid, View} from 'react-native';
import TimerMixin from 'react-timer-mixin';

var TimerMixinView = React.createClass({
    mixins: [TimerMixin],
    componentDidMount: function () {
        this.setTimeout(
            () => {
                ToastAndroid.show('Save you from anything', ToastAndroid.SHORT);
            },
            2000
        );
    },
    render(){
        return (
            <View>
                <Text>TimerMixinView</Text>
            </View>
        );
    }
});

const Timers = {
    TimerMixinView: TimerMixinView
};

module.exports = Timers;