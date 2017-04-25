/**
 * Created by：CaMnter
 */

'use strict';

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text
} from 'react-native';


class MagicImage extends Component {
    render() {
        let picture = {
            uri: 'https://avatars2.githubusercontent.com/u/10336931?v=3&s=460'
        };
        return (
            <Image source={picture} style={{width: 177, height: 177}}/>
        );
    }
}

class InstructionsText extends Component {
    render() {
        return (
            <Text style={styles.instructions}>{this.props.content}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        color: '#2D9FD8'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

var Props = {
    styles: styles,
    MagicImage: MagicImage,
    InstructionsText: InstructionsText
};

module.exports = Props;