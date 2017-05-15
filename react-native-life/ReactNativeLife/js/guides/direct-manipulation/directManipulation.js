/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {ClearTextInput, CompositeView, DirectView} from "./lib/DirectManipulation";
import {ScrollView} from "react-native";

class Root extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <ScrollView>
                <DirectView/>
                <CompositeView/>
                <ClearTextInput/>
            </ScrollView>
        );
    }
}

module.exports = Root;