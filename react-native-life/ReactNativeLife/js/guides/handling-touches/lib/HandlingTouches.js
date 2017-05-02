/**
 * Created by：CaMnter
 */

import React, {Component} from  'react';
import {
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

class TouchableViews extends Component {

    constructor() {
        super();
        this.state = {count: 0};
    }

    onPressButton() {

    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableHighlight onPress={this.onPressButton}>
                    <Text style={{
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableHighlight + {this.state.count}
                    </Text>
                </TouchableHighlight>
                <TouchableNativeFeedback onPress={this.onPressButton}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableNativeFeedback + {this.state.count}
                    </Text>
                </TouchableNativeFeedback>
                <TouchableOpacity onPress={this.onPressButton}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableOpacity + {this.state.count}
                    </Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this.onPressButton}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableWithoutFeedback + {this.state.count}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }

}

const HandlingTouches = {
    TouchableViews: TouchableViews
};

module.exports = HandlingTouches;