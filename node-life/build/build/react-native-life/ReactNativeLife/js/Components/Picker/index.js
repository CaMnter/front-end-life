/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {PickerExample} from "./Picker";

class Root extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <PickerExample/>
        );
    }

}

module.exports = Root;