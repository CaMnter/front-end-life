/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {ButtonView} from "./lib/Button";

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ButtonView/>
        );
    }
}

module.exports = Root;