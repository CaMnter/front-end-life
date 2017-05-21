/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {TimerMixinView} from "./Timers";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TimerMixinView/>
        );
    }
}

module.exports = Root;