/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableHighlight,
    View
} from 'react-native';

const alertMessage = 'Save you from anything ' +
    'And Save you from anything';

class AlertExampleView extends Component {

    render() {
        return (
            <View>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={() =>
                                        Alert.alert('Alert Title', alertMessage)
                                    }>
                    <View style={styles.button}>
                        <Text>Default alert</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={() =>
                                        Alert.alert(
                                            'Alert Title',
                                            alertMessage,
                                            [
                                                {
                                                    text: 'Ok',
                                                    onPress: () => ToastAndroid.show('Save you from anything', ToastAndroid.SHORT)
                                                }
                                            ]
                                        )
                                    }>
                    <View style={styles.button}>
                        <Text>One button</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={() =>
                                        Alert.alert(
                                            'Alert Title',
                                            alertMessage,
                                            [
                                                {
                                                    text: 'Cancel',
                                                    onPress: () => ToastAndroid.show('Cancel', ToastAndroid.SHORT)
                                                },
                                                {
                                                    text: 'OK',
                                                    onPress: () => ToastAndroid.show('OK', ToastAndroid.SHORT)
                                                }
                                            ]
                                        )
                                    }>
                    <View style={styles.button}>
                        <Text>Alert with two buttons</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={() => Alert.alert(
                                        'Foo Title',
                                        alertMessage,
                                        '.......'.split('').map((dot, index) => ({
                                            text: 'Button ' + index,
                                            onPress: () => console.log('Pressed ' + index)
                                        }))
                                    )}>
                    <View style={styles.button}>
                        <Text>Crazy alert</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={() => Alert.alert(
                                        'Alert Title',
                                        null,
                                        [
                                            {text: 'OK', onPress: () => console.log('OK')},
                                        ],
                                        {
                                            cancelable: false
                                        }
                                    )}>
                    <View style={styles.button}>
                        <Text>Alert that cannot be dismissed</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

}

const examples = {
    pagerTitle: 'Alert Examples',
    pagerBlocks: [
        {
            title: 'Alert',
            render: () => <AlertExampleView/>
        }

    ]
}


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

module.exports = {
    examples
};