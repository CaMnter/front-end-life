/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {Text, View, Platform, StyleSheet} from "react-native";

const simpleStyle = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: Platform.OS == 'ios' ? 40 : 20,
        color: 'mediumpurple'
    }
});

class SimplePlatformView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={simpleStyle.root}>
                <Text style={simpleStyle.text}>
                    {Platform.OS}
                </Text>
            </View>
        );
    }
}

const platformStyle = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        height: 66,
        width: 266,
        ...Platform.select(
            {
                ios: {
                    backgroundColor: 'red',
                },
                android: {
                    backgroundColor: 'steelblue',
                }
            }
        )
    }
});

class PlatformStyleView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={platformStyle.root}>
                <View style={platformStyle.view}/>
                <Text style={simpleStyle.text}>Platform.Version === {Platform.Version}</Text>
            </View>
        );
    }
}

// Platform-specific extensions
// Xxx.ios.js
// Xxx.android.js
// const Xxx = require('./Xxx');

const ZPlatform = {
    SimplePlatformView: SimplePlatformView,
    PlatformStyleView: PlatformStyleView
}

module.exports = ZPlatform;