/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {AccessibilityView} from "./lib/Accessibility";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <AccessibilityView/>
        );
    }
}

module.exports = Root;