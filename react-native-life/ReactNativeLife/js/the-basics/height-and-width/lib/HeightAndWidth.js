/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {View} from 'react-native';

class FixedDimensionsView extends Component {
    render() {
        return (
            <View>
                <View style={{width: 66, height: 66, backgroundColor: 'powderblue'}}/>
                <View style={{width: 122, height: 122, backgroundColor: 'skyblue'}}/>
                <View style={{width: 196, height: 196, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

class FlexView extends Component {
    render() {
        return (
            <View style={{flex: 233}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 4, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 8, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

const HeightAndWidth = {
    FixedDimensionsView: FixedDimensionsView,
    FlexView: FlexView
};

module.exports = HeightAndWidth;