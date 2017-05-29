/**
 * @author CaMnter
 */

import * as React from "react";
import {StatusBarExample} from "./StatusBar";

class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StatusBarExample/>
        );
    }
}

module.exports = Root;
