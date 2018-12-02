/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    ProgressBarAndroid
} from 'react-native';
let ProgressBar = require('ProgressBarAndroid');
import RNTesterBlock from '../../../RNTester/js/RNTesterBlock';
import RNTesterPage from '../../../RNTester/js/RNTesterPage';
import TimerMixin from 'react-timer-mixin';

let MovingBar = React.createClass({
    mixins: [TimerMixin],

    getInitialState: function() {
        return {
            progress: 0
        };
    },

    componentDidMount: function() {
        this.setInterval(
            () => {
                var progress = (this.state.progress + 0.02) % 1;
                this.setState({progress: progress});
            }, 50
        );
    },

    render: function() {
        return <ProgressBar progress={this.state.progress} {...this.props} />;
    }

});

class ProgressBarAndroidExample extends Component {

    static title = '<ProgressBarAndroid>';
    static description = 'Horizontal bar to show the progress of some operation.';

    render() {
        return (
            <RNTesterPage title="ProgressBar Examples">
                <RNTesterBlock title="Horizontal Indeterminate ProgressBar">
                    <ProgressBar styleAttr="Horizontal"/>
                </RNTesterBlock>

                <RNTesterBlock title="Horizontal ProgressBar">
                    <MovingBar styleAttr="Horizontal" indeterminate={false}/>
                </RNTesterBlock>

                <RNTesterBlock title="Horizontal Black Indeterminate ProgressBar">
                    <ProgressBar styleAttr="Horizontal" color="black"/>
                </RNTesterBlock>

                <RNTesterBlock title="Horizontal Blue ProgressBar">
                    <MovingBar styleAttr="Horizontal" indeterminate={false} color="blue"/>
                </RNTesterBlock>
            </RNTesterPage>
        );
    }

}

module.exports = {
    ProgressBarAndroidExample: ProgressBarAndroidExample
};