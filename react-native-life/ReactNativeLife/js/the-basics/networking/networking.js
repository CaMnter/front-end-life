/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {FetchPromiseView, FetchAsyncView, XMLHttpRequestView} from "./lib/Networking";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <XMLHttpRequestView/>
        );
    }
}

module.exports = Root;