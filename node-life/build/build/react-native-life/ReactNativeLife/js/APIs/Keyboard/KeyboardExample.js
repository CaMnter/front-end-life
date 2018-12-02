/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    Keyboard
} from 'react-native';

class KeyboardExample extends Component {

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        alert('Keyboard Shown');
    }

    _keyboardDidHide() {
        alert('Keyboard Hidden');
    }

    render() {
        return (
            <TextInput
                onSubmitEditing={Keyboard.dismiss}/>
        );
    }

}

const examples = {
    pagerTitle: 'Keyboard examples',
    pagerBlocks: [
        {
            title: 'Simple keyboard example',
            render(){
                return (<KeyboardExample/>);
            }
        }
    ]
};

module.exports = {examples};