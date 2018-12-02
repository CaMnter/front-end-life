/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {DrawerLayoutView} from "./DrawerLayoutAndroid";

class Root extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <DrawerLayoutView/>
        );
    }

}

module.exports = Root;