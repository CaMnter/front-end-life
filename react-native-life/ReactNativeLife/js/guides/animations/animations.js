/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {FadeInView} from "./lib/Animations";
import {Text} from "react-native";

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                    FadeInView
                </Text>
            </FadeInView>
        );
    }
}

module.exports = Root;