/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {Text, TextInput, View} from "react-native";

class PizzaTranslatorView extends Component {
    constructor() {
        super();
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 26}}>
                <TextInput
                    style={{height: 50}}
                    placeholder='Will to translate'
                    onChangeText={(text) => this.setState({text}) }/>
                <Text style={{padding: 10, fontSize: 27}}>
                    {this.state.text.split(' ').map(word => word && '🍕').join('🎪')}
                </Text>
            </View>
        );
    }
}

const HandlingText = {
    PizzaTranslatorView: PizzaTranslatorView
};

module.exports = HandlingText;
