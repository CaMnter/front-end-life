/**
 * @author CaMnter
 */
import React, {Component} from 'react';
import {PlatformStyleView} from './lib/Platform';

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