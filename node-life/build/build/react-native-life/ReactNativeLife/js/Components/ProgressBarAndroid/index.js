/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {Text} from 'react-native'
import {ProgressBarAndroidExample} from "./ProgressBarAndroid";

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProgressBarAndroidExample/>
        );
    }

}

module.exports = Root;
