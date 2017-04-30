/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {FetchPromiseView, FetchAsyncView} from "./lib/Networking";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <FetchAsyncView/>
        );
    }
}

module.exports = Root;