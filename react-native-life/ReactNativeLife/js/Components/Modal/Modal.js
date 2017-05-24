/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    ToastAndroid,
    View
} from 'react-native';

class SimpleModal extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(visible: boolean) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        ToastAndroid.show('Save you from anything', ToastAndroid.SHORT);
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Save you from anything</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text> Hide </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = {
    SimpleModal:SimpleModal
}