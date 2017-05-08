/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {ImageViews} from "./lib/Images";

class Root extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <ImageViews/>
        );
    }
}

module.exports = Root;