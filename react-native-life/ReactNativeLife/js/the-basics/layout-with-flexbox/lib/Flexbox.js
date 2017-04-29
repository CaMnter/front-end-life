/**
 * Created by：CaMnter
 */
import React, {Component} from 'react';
import {View} from "react-native";

/**
 * flexDirection:
 * row 横向
 * column 纵向 （默认）
 */
class FlexboxDirectionView extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 55, height: 55, backgroundColor: 'powderblue'}}/>
                <View style={{width: 55, height: 55, backgroundColor: 'skyblue'}}/>
                <View style={{width: 55, height: 55, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

/**
 * 主轴布局，主轴 = flexDirection 指定的方向
 * justifyContent:
 * flex-start
 * center
 * flex-end
 * space-around
 * space-between
 */
class FlexboxJustifyContentView extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={{width: 55, height: 55, backgroundColor: 'powderblue'}}/>
                <View style={{width: 55, height: 55, backgroundColor: 'skyblue'}}/>
                <View style={{width: 55, height: 55, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

/**
 * 辅轴布局，辅轴 = flexDirection 指定的反方向（ flexDirection: 'column'，辅轴 = 'row' ）
 * justifyContent:
 * flex-start
 * center
 * flex-end
 * space-around
 * space-between
 */
class FlexboxAlignItemsView extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }}>
                <View style={{width: 55, height: 55, backgroundColor: 'powderblue'}}/>
                <View style={{width: 55, height: 55, backgroundColor: 'skyblue'}}/>
                <View style={{width: 55, height: 55, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

const Flexbox = {
    FlexboxDirectionView: FlexboxDirectionView,
    FlexboxJustifyContentView: FlexboxJustifyContentView,
    FlexboxAlignItemsView: FlexboxAlignItemsView
};

module.exports = Flexbox;