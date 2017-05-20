/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {FlatListView, FlatListItem} from "./lib/FlatList";

export default class Root extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <FlatListView/>
        );
    }

}