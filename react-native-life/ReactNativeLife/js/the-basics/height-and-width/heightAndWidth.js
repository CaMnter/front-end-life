/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {FixedDimensionsView, FlexView} from './lib/HeightAndWidth'

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <FlexView/>
        );
    }
}

module.exports = Root;