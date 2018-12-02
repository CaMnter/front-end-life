/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {examples} from './PermissionsExample.android'
import {SmartPager} from "../../core";

class Root extends Component {


    render() {
        return (
            <SmartPager
                examples={examples}/>
        );
    }

}

module.exports = Root;
