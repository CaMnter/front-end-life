/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {View} from "react-native";
import {ActivityIndicatorView} from "./lib/ActivityIndicator";

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ActivityIndicatorView/>
            </View>
        );
    }

}

module.exports = Root;