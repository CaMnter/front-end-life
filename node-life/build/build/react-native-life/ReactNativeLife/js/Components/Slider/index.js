/**
 * @author CaMnter
 */

import React from 'react';
import {SlidingExample} from "./Slider";

class Root extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <SlidingExample/>
        );
    }

}

module.exports = Root;