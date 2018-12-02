/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, ToastAndroid,
    TouchableWithoutFeedback
} from "react-native";

class AccessibilityView extends Component {
    constructor() {
        super();
    }

    onPress() {
        ToastAndroid.show('Save you from anything', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.root}>
                <View accessible={true} accessibilityLabel={'Tap me!'}>
                    <Text>Save</Text>
                    <Text>you</Text>
                </View>
                <View accessible={false}>
                    <Text>from</Text>
                    <Text>anything</Text>
                </View>
                <TouchableOpacity accessible={true} accessibilityLabel={'Save'}
                                  onPress={this.onPress}>
                    <View>
                        <Text>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback accessibilityComponentType="button"
                                          onPress={this.onPress}>
                    <View>
                        <Text>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{
                    position: 'absolute', left: 10, top: 10, right: 10, height: 200,
                    backgroundColor: 'powderblue'
                }} importantForAccessibility="yes">
                    <Text> First layout </Text>
                    <Text style={{position: 'absolute', left: 10, top: 150, right: 10}}> Third layout </Text>
                </View>
                <View style={{
                    position: 'absolute', left: 10, top: 10, right: 10, height: 100,
                    backgroundColor: 'yellow'
                }} importantForAccessibility="no-hide-descendants">
                    <Text> Second layout </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});

const Accessibility = {
    AccessibilityView: AccessibilityView
}

module.exports = Accessibility;