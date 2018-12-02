/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Share
} from 'react-native';

class ShareExample extends Component {

    _shareMessageBind: Function;
    _shareTextBind: Function;
    _shareSuccessBind: Function;
    state: any;

    _shareMessage = () => {
        Share
            .share({
                message: 'React Native | A framework for building native apps using React'
            })
            .then(this._shareSuccessBind)
            .catch(error => {
                this.setState({result: 'error: ' + error.message})
            })
    };

    _shareText = () => {
        Share
            .share(
                {
                    message: 'A framework for building native apps using React',
                    url: 'http://camnter.com',
                    title: 'React Native'
                },
                {
                    dialogTitle: 'Share React Native website',
                    excludedActivityTypes: [
                        'com.apple.UIKit.activity.PostToTwitter'
                    ],
                    tintColor: 'green'
                }
            )
            .then(this._shareSuccessBind)
            .catch(error => {
                this.setState({result: 'error: ' + error.message})
            });
    };

    _shareSuccess = value => {
        // success
        if (value.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({result: 'shared with an activityType: ' + result.activityType});
            } else {
                this.setState({result: 'shared'});
            }
        } else if (value.action === Share.dismissedAction) {
            this.setState({result: 'dismissed'});
        }
    }

    constructor(props) {
        super(props);

        this._shareMessageBind = this._shareMessage.bind(this);
        this._shareTextBind = this._shareText.bind(this);
        this._shareSuccessBind = this._shareSuccess.bind(this);

        this.state = {
            result: ''
        };
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={this._shareMessage}>
                    <View style={styles.button}>
                        <Text>Share message</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={this._shareText}>
                    <View style={styles.button}>
                        <Text>Share message - URL and title</Text>
                    </View>
                </TouchableHighlight>
                <Text>{this.state.result}</Text>
            </View>
        );
    }

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

const examples = {
    pagerTitle: 'Share examples',
    pagerBlocks: [
        {
            title: 'Simple share',
            description: 'Only simple share examples',
            render(){
                return (<ShareExample/>);
            }
        }

    ]
};

module.exports = {examples};