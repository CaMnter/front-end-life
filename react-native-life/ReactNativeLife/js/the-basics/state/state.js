/**
 * Created by：CaMnter
 */

'use strict';

import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import State, {StateText} from "./lib/State";

class Root extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={State.styles.container}>
                <StateText text='Save you from anything'/>
                <StateText text='Save you from anything'/>
                <StateText text='Save you from anything'/>
                <StateText text='Save you from anything'/>
            </View>
        );
    }

}

module.exports = Root;