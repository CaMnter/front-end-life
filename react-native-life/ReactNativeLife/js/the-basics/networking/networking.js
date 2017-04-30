/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {FetchPromiseView} from "./lib/Networking";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <FetchPromiseView/>
        );
    }
}

module.exports = Root;