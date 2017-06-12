/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    Clipboard,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import {SmartTouchableHighlight} from "../../core";

class ClipboardExample extends Component {

    state = {
        magicNumber: 0,
        clipboardContent: ''
    };

    constructor(props) {
        super(props);
    }

    _setState(magicNumber, clipboardContent) {
        this.setState({
            magicNumber: magicNumber,
            clipboardContent: clipboardContent
        });
    }

    _setClipboardContent() {
        Clipboard.setString('Save you from anything');
    }

    _getClipboardContent() {
        Clipboard.getString()
            .then(value => {
                // success
                ToastAndroid.show('[Success]  [Clipboard]  [getString]', ToastAndroid.SHORT);
                this._setState(++this.state.magicNumber, value);
            }, error => {
                // failure
                ToastAndroid.show('[Failure]  [Clipboard]  [getString]', ToastAndroid.SHORT);
            });
    }


    render() {
        let highLightProps = {
            underlayColor: '#e5e5e5',
            style: [style.highLight]
        };
        return (
            <View>
                <SmartTouchableHighlight
                    textContent='Set Clipboard'
                    onPress={this._setClipboardContent.bind(this)}/>
                <SmartTouchableHighlight
                    textContent='Get Clipboard'
                    onPress={this._getClipboardContent.bind(this)}/>
                <Text
                    style={[style.view]}>
                    {'[magicNumber] = ' + this.state.magicNumber + '\n' +
                    '[clipboardContent] = ' + this.state.clipboardContent + '\n'}
                </Text>
            </View>
        );
    }

}

const style = StyleSheet.create({
    highLight: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view: {
        flex: 1,
        flexGrow: 1,
        padding: 10,
        textAlign: 'center',
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const examples = {
    pagerTitle: 'Clipboard examples',
    pagerBlocks: [
        {
            title: 'Simple Clipboard Example',
            render(){
                return (
                    <ClipboardExample/>
                );
            }
        }
    ]
};

module.exports = {examples};