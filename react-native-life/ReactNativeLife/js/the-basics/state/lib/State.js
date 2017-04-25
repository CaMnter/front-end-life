/**
 * Created by：CaMnter
 */

'use strict';

import React, {Component} from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    stateText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#2D9FD8',
        marginBottom: 5,
    },
});

class StateText extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(() => {
            this.setState(
                {showText: !this.state.showText}
            );
        }, 1777);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text style={styles.stateText}>{display}</Text>
        );
    }

}

const State = {
    styles: styles,
    StateText: StateText
};

module.exports = State;