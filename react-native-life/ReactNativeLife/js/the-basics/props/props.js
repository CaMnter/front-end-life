/**
 * Created by：CaMnter
 */

'use strict';

import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import Props, {InstructionsText, MagicImage} from "./lib/Props";

class Root extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={Props.styles.container}>
                <Text style={Props.styles.welcome}>
                    Save you from anything!
                </Text>
                <InstructionsText content='To get started, edit index.android.js'/>
                <Text style={Props.styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <MagicImage/>
            </View>
        );
    }

}

module.exports = Root;