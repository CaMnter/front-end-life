/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from "react-native";

class StyleView extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text style={[styles.text, styles.camnter]}>CaMnter</Text>
                <Text style={[styles.text, styles.save]}>Save you from anything</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        textAlign: 'center',
        fontSize: 14
    },
    camnter: {
        color: '#2D9FD8',
        fontWeight: 'bold',
        fontSize: 16
    },
    save: {
        color: '#333333'
    }

});

const Style = {
    StyleView: StyleView
};

module.exports = Style;