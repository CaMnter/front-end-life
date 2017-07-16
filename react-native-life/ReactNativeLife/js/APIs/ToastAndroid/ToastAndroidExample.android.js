/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableWithoutFeedback
} from 'react-native';

class ToastAndroidExample extends Component {


}

const examples = {
    pagerTitle: 'Toast Examples',
    pagerBlocks: [
        {
            title: 'Short toast',
            render(){
                return (
                    <TouchableWithoutFeedback
                        onPress={() =>
                            ToastAndroid.show('Short duration', ToastAndroid.SHORT)}>
                        <Text style={styles.text}>Short duration</Text>
                    </TouchableWithoutFeedback>
                );
            }
        },
        {
            title: 'Long toast',
            render(){
                return (
                    <TouchableWithoutFeedback
                        onPress={() =>
                            ToastAndroid.show('Long duration', ToastAndroid.LONG)}>
                        <Text style={styles.text}>Long duration</Text>
                    </TouchableWithoutFeedback>
                );
            }
        },
        {
            title: 'Toast with top gravity',
            render(){
                return (
                    <TouchableWithoutFeedback
                        onPress={() =>
                            ToastAndroid.showWithGravity(
                                'Toast with top gravity',
                                ToastAndroid.SHORT,
                                ToastAndroid.TOP,
                            )
                        }>
                        <Text style={styles.text}>Toast with top gravity</Text>
                    </TouchableWithoutFeedback>
                );
            }
        },
        {
            title: 'Toast with center gravity',
            render(){
                return (
                    <TouchableWithoutFeedback
                        onPress={() =>
                            ToastAndroid.showWithGravity(
                                'Toast with top gravity',
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER,
                            )
                        }>
                        <Text style={styles.text}>Toast with center gravity</Text>
                    </TouchableWithoutFeedback>
                );
            }
        },
        {
            title: 'Toast with bottom gravity',
            render(){
                return (
                    <TouchableWithoutFeedback
                        onPress={() =>
                            ToastAndroid.showWithGravity(
                                'Toast with top gravity',
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM,
                            )
                        }>
                        <Text style={styles.text}>Toast with bottom gravity</Text>
                    </TouchableWithoutFeedback>
                );
            }
        }
    ]
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
    }
});

module.exports = {examples};