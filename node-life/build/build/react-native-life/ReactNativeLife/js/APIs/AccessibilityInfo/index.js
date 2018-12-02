/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import ScreenReaderStatusView from './AccessibilityInfo'

class Root extends Component {

    render() {
        return (
            <ScreenReaderStatusView/>
        );
    }

}

module.exports = Root;