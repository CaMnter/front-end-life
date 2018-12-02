/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {SimpleDatePicker} from "./DatePickerIOS";

export default class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SimpleDatePicker/>
        );
    }

}
