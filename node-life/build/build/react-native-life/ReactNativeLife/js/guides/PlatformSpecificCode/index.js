/**
 * @author CaMnter
 */
import React, {Component} from 'react';
import {PlatformStyleView} from './Platform';

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <PlatformStyleView/>
        );
    }
}

module.exports = Root;