/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ToastAndroid,
} from 'react-native';

class OpenUrlButton extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        url: PropTypes.string,
    };

    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                ToastAndroid.show("[Linking] can't open url", ToastAndroid.SHORT);
            }
        });
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.handleClick}>
                <View style={styles.button}>
                    <Text style={styles.text}>{this.props.url}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

class Rounter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <OpenUrlButton url={'https://www.camnter.com'}/>
                <OpenUrlButton url={'http://www.gf404.com'}/>
                <OpenUrlButton url={'fb://notifications'}/>
                <OpenUrlButton url={'geo:37.484847,-122.148386'}/>
                <OpenUrlButton url={'tel:9876543210'}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 30,
    },
    button: {
        padding: 10,
        backgroundColor: '#3B5998',
        marginBottom: 10,
    },
    text: {
        color: 'white',
    },
});

const examples = {
    pagerTitle: 'Linking examples',
    pagerBlocks: [
        {
            title: 'Linking',
            description: 'Shows how to use Linking to open URLs.',
            render(){
                return (
                    <Rounter/>
                );
            }
        }
    ]
};

module.exports = {examples};