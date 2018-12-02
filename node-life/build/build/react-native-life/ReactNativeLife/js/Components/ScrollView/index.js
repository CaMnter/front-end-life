/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {SimpleScrollView, ScrollViewExample} from "./ScrollView";

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollViewExample/>
        );
    }

}

module.exports = Root;