/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {SimpleModal} from "./Modal";

class Root extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <SimpleModal/>
        );
    }

}

module.exports = Root;