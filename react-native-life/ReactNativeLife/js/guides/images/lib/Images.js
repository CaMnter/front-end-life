/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from "react-native";

let imgA = require('../../../img/img_girl_1.jpg');

class ImageViews extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ScrollView>
                    <Image style={{width: 400, height: 400}} source={imgA}>
                        <Text style={{fontSize: 40, color: 'steelblue'}}>
                            CaMnter
                        </Text>
                    </Image>
                    <Image style={{width: 400, height: 400}}
                           source={require('../../../img/img_girl_2.jpg')}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 400, height: 400}}/>
                    <Text style={{fontSize: 40, color: 'steelblue'}}>
                        Save you from anything
                    </Text>
                    <Image source={ {uri: 'img_girl_2.jpg'}}/>
                </ScrollView>
            </View>
        );
    }
}

const Images = {
    ImageViews: ImageViews
}

module.exports = Images;