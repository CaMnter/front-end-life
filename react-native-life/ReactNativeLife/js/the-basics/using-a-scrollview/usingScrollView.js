/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {ZScrollView} from "./lib/UsingScrollView";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ZScrollView/>
        );
    }
}

module.exports = Root;