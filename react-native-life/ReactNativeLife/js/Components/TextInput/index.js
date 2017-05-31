/**
 * @author CaMnter
 */

import * as React from 'react';
import {examples} from './TextInput';
import {SmartPager} from '../../core';

class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SmartPager examples={examples}/>
        );
    }
}

module.exports = Root;

