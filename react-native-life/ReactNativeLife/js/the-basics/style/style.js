/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {StyleView} from "./lib/Style";

class Root extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <StyleView/>
            </View>
        );
    }

}

module.exports = Root;