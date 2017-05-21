/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {AccessibilityView} from "./Accessibility";

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