/**
 * Created by：CaMnter
 */
import React, {Component} from 'react';
import {PizzaTranslatorView} from "./HandlingText";

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <PizzaTranslatorView/>
        );
    }
}

module.exports = Root;