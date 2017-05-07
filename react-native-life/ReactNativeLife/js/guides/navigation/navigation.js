/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {ZStackNavigator} from "./lib/Navigation";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ZStackNavigator/>
        );
    }
}

module.exports = Root;