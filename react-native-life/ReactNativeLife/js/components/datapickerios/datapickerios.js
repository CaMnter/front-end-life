/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {SimpleDatePicker} from "./lib/DatePickerIOS";

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SimpleDatePicker/>
        );
    }

}

module.exports = Root;