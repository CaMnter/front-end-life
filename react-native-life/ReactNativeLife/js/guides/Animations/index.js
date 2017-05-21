/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {FadeInView, LayoutAnimationView} from "./Animations";
import {Text} from "react-native";

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <FadeInView Style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            //     <Text Style={{fontSize: 28, textAlign: 'center', margin: 10}}>
            //         FadeInView
            //     </Text>
            // </FadeInView>
            <LayoutAnimationView/>
        );
    }
}

module.exports = Root;