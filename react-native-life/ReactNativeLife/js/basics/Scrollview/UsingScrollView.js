/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {Image, ScrollView, Text} from "react-native";

let imgA = require('../../Img/img_girl_1.jpg');
let imgB = require('../../Img/img_girl_2.jpg');
let imgC = require('../../Img/img_girl_3.jpg');

class ZScrollView extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 40, color: 'steelblue'}}>
                    CaMnter
                </Text>
                <Image style={{width: 400, height: 400}} source={imgA}/>
                <Image style={{width: 400, height: 400}} source={imgB}/>
                <Image style={{width: 400, height: 400}} source={imgC}/>
                <Text style={{fontSize: 40, color: 'steelblue'}}>
                    Save you from anything
                </Text>
                <Image style={{width: 400, height: 400}} source={imgA}/>
                <Image style={{width: 400, height: 400}} source={imgB}/>
                <Image style={{width: 400, height: 400}} source={imgC}/>
            </ScrollView>
        );
    }
}

const UsingScrollView = {
    ZScrollView: ZScrollView
};

module.exports = UsingScrollView;