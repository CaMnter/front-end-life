/**
 * Created by：CaMnter
 */

import React, {Component} from  'react';
import {TouchableViews} from "./lib/HandlingTouches";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <TouchableViews/>
        );
    }
}

module.exports = Root;