/**
 * @author CaMnter
 */

import React from 'react';
import {SectionListExample} from "./SectionList";

class Root extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <SectionListExample/>
        );
    }

}

module.exports = Root;