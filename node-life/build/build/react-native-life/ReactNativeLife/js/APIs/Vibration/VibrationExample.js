/**
 * @author CaMnter
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Vibration,
    Platform
} from 'react-native';

let pattern, patternLiteral, patternDescription;
if (Platform.OS === 'android') {
    pattern = [0, 500, 200, 500];
    patternLiteral = '[0, 500, 200, 500]';
    patternDescription = `Android ${patternLiteral}`;
} else {
    pattern = [0, 1000, 2000, 3000];
    patternLiteral = '[0, 1000, 2000, 3000]';
    patternDescription = `iOS ${patternLiteral}`;
}

const examples = {
    pagerTitle: 'Vibration examples',
    pagerBlocks: [
        {
            title: 'Pattern Descriptions',
            render() {
                return (
                    <View style={styles.wrapper}>
                        <Text>{`Pattern Descriptions ${patternDescription}`}</Text>
                    </View>
                );
            }
        },
        {
            title: 'Vibration.vibrate()',
            render() {
                return (
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => Vibration.vibrate(pattern)}>
                        <View style={styles.button}>
                            <Text>{'Vibration.vibrate()'}</Text>
                        </View>
                    </TouchableHighlight>
                );
            }
        },
        {
            title: `Vibration.vibrate(${patternLiteral}, true)`,
            render() {
                return (
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => Vibration.vibrate(pattern, true)}>
                        <View style={styles.button}>
                            <Text>{`Vibration.vibrate(${patternLiteral}, true)`}</Text>
                        </View>
                    </TouchableHighlight>
                );
            }
        },
        {
            title: 'Vibration.cancel()',
            render() {
                return (
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => Vibration.cancel()}>
                        <View style={styles.button}>
                            <Text>Vibration.cancel()</Text>
                        </View>
                    </TouchableHighlight>
                );
            }
        }
    ]
};

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    }
});

module.exports = {examples};
