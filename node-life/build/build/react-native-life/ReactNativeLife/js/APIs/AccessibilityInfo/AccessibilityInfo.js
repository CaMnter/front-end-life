/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {AccessibilityInfo, Text, View} from "react-native";

class ScreenReaderStatusView extends Component {

    state = {
        screenReaderEnabled: false,
    };

    _handleScreenReaderToggled = (isEnabled) => {
        this.setState({
            screenReaderEnabled: isEnabled,
        });
    }

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            'change',
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().done((isEnabled) => {
                this.setState({
                        screenReaderEnabled: isEnabled
                    }
                );
            }
        );
    }

    render() {
        return (
            <View>
                <Text>
                    The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                </Text>
            </View>
        );
    }

}

module.exports = ScreenReaderStatusView;