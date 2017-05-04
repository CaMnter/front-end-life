/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {Animated} from "react-native";

class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnimation: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated
            .timing(this.state.fadeAnimation, {toValue: 0.5})
            .start();
    }

    render() {
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnimation
                }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

const Animations = {
    FadeInView: FadeInView
};

module.exports = Animations;