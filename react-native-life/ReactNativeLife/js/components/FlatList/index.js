/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {FlatListExample, FlatListView, FlatListItem} from "./FlatList";


class Root extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <FlatListExample/>
        );
    }

}

module.exports = Root;