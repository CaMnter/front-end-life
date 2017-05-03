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

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    onPressButton() {
        this.setState({count: ++this.state.count});
        console.log('[onPressButton]   [state] = ', this.state);
    }

    render() {
        let count = this.state.count;
        console.log('[render]   [count] = ', this.state.count);
        let onPressButtonBind = this.onPressButton.bind(this)
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableHighlight onPress={onPressButtonBind}>
                    <Text style={{
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableHighlight + {count}
                    </Text>
                </TouchableHighlight>
                <TouchableNativeFeedback onPress={onPressButtonBind}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableNativeFeedback + {count}
                    </Text>
                </TouchableNativeFeedback>
                <TouchableOpacity onPress={onPressButtonBind}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableOpacity + {count}
                    </Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this.onPressButton}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: 'steelblue'
                    }}>
                        TouchableWithoutFeedback + {count}
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