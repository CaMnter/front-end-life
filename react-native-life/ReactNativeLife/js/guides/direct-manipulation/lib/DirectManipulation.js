/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

/**
 * 直接 onPressIn={() => this.setState({buttonOpacity: 0.5})
 * 不需要 bind
 */
class DirectView extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonOpacity: 1};
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPressIn={() => this.setState({buttonOpacity: 0.5})}
                    onPressOut={() => this.setState({buttonOpacity: 1})}>
                    <View style={[styles.wrapper, {opacity: this.state.buttonOpacity}]}>
                        <Text style={styles.text}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class TextView extends Component {
    constructor(props) {
        super(props);
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <View ref={component => this._root = component} {...this.props}>
                <Text style={styles.text}>{this.props.content}</Text>
            </View>
        );
    }
}

class CompositeView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <TouchableOpacity style={[styles.wrapper, {backgroundColor: 'powderblue'}]}>
                <TextView content="Save"/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 20,
        backgroundColor: 'skyblue'
    },
    text: {
        color: 'white',
    }
});

const DirectManipulation = {
    DirectView: DirectView,
    CompositeView: CompositeView
};

module.exports = DirectManipulation;
