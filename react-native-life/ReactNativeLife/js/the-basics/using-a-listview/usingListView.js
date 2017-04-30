/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {ZListView} from "./lib/UsingListView";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ZListView/>
        );
    }
}

module.exports = Root;