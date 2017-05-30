/**
 * @author CaMnter
 */

import * as React from 'react';
import {examples} from './Text';
import {StyleSheet} from 'react-native'
import {ExamplePager} from '../../core';

class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExamplePager
                pagerTitleStyle={{textAlign: 'center',}}
                pagerTitle={examples.pagerTitle}
                pagerBlocks={examples.pagerBlocks}/>
        );
    }
}

module.exports = Root;
