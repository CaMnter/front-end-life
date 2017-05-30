/**
 * @author CaMnter
 */

import * as React from 'react';
import {examples} from './Text';
import {ExamplePager} from '../../core';

class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExamplePager
                pagerTitle={examples.pagerTitle}
                pagerBlocks={examples.pagerBlocks}/>
        );
    }
}

module.exports = Root;
