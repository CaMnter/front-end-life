/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {Button, ScrollView, ToastAndroid, StyleSheet, View} from "react-native";

const onButtonPress = () => {
    ToastAndroid.show('Save you from anything', ToastAndroid.SHORT);
};

class ButtonView extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <ScrollView >
                <View style={styles.buttonWrapper}>
                    <Button
                        onPress={onButtonPress}
                        title='Button-1'
                        accessibilityLabel='Save you from anything 1'/>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        onPress={onButtonPress}
                        title="Button-2"
                        color="#841584"
                        accessibilityLabel="Save you from anything 2"/>
                </View>
                <View style={[styles.buttonWrapper, {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }]}>
                    <Button
                        onPress={onButtonPress}
                        title="Button-3"
                        accessibilityLabel="Save you from anything 3"/>
                    <Button
                        onPress={onButtonPress}
                        title="Button-4"
                        color="#841584"
                        accessibilityLabel="Save you from anything 4"/>
                    <Button
                        disabled
                        onPress={onButtonPress}
                        title="Button-5"
                        accessibilityLabel="Save you from anything 5"/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        padding: 16
    }
});

const ZButton = {
    ButtonView: ButtonView
};

module.exports = ZButton;