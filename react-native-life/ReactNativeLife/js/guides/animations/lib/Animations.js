/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {Animated, LayoutAnimation, TouchableOpacity, View} from "react-native";

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

class LayoutAnimationView extends Component {
    constructor(props) {
        super(props);
        this.state = {w: 100, h: 100};
        this.onPressBind = this.onPress.bind(this);
    }

    componentWillMount() {
        // Animate creation
        LayoutAnimation.spring();
    }

    onPress() {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w < 400 ? this.state.w + 15 : this.state.w,
            h: this.state.h < 400 ? this.state.h + 15 : this.state.h
        });
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={this.onPressBind}>
                    <View style={{
                        width: this.state.w,
                        height: this.state.h,
                        backgroundColor: 'powderblue'
                    }}/>
                </TouchableOpacity>
            </View>
        );
    }

}

const Animations = {
    FadeInView: FadeInView,
    LayoutAnimationView: LayoutAnimationView
};

module.exports = Animations;