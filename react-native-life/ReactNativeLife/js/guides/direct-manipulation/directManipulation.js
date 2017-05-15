/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {CompositeView, DirectView} from "./lib/DirectManipulation";
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
            </ScrollView>
        );
    }
}

module.exports = Root;