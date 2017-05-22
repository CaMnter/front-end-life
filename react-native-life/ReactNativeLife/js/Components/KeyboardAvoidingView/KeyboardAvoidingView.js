/**
 * @author CaMnter
 */

'use strict';

import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    Modal,
    SegmentedControlIOS,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

import RNTesterBlock from '../../../RNTester/js/RNTesterBlock';
import RNTesterPage from '../../../RNTester/js/RNTesterPage';

class KeyboardAvoidingViewExample extends Component {

    state = {
        behavior: 'padding',
        modalOpen: false,
    };

    onSegmentChange = (segment: String) => {
        this.setState({behavior: segment.toLowerCase()});
    };

    renderExample = () => {
        return (
            <View style={styles.outerContainer}>
                <Modal animationType="fade" visible={this.state.modalOpen}>
                    <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
                        <SegmentedControlIOS
                            onValueChange={this.onSegmentChange}
                            selectedIndex={this.state.behavior === 'padding' ? 0 : 1}
                            style={styles.segment}
                            values={['Padding', 'Position']}/>
                        <TextInput
                            placeholder="<TextInput />"
                            style={styles.textInput}/>
                    </KeyboardAvoidingView>
                    <TouchableHighlight
                        onPress={() => this.setState({modalOpen: false})}
                        style={styles.closeButton}>
                        <Text>Close</Text>
                    </TouchableHighlight>
                </Modal>

                <TouchableHighlight onPress={() => this.setState({modalOpen: true})}>
                    <Text>Open Example</Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <RNTesterPage title="Keyboard Avoiding View">
                <RNTesterBlock title="Keyboard-avoiding views move out of the way of the keyboard.">
                    {this.renderExample()}
                </RNTesterBlock>
            </RNTesterPage>
        );
    }

}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
    segment: {
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        left: 10,
    }
});

module.exports = {
    KeyboardAvoidingViewExample: KeyboardAvoidingViewExample
};
