/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {Text, View, Platform, Stylesheet} from "react-native";

let simpleStyle = Stylesheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: Platform.OS == 'ios' ? 20 : 14,
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

let platformStyle = Stylesheet.create({
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

class PlatformStyle extends Component {
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

const Platform = {
    SimplePlatformView: SimplePlatformView,
    PlatformStyle: PlatformStyle
}

module.exports = Platform;