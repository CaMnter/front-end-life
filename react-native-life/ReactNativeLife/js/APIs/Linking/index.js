/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {examples} from './LinkingExample';
import {SmartPager} from "../../core";

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SmartPager
                examples={examples}/>
        );
    }

}

module.exports = Root;