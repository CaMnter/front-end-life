/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from "react-native";

let imgA = require('../../img/img_girl_1.jpg');
let facebookLogo = 'https://facebook.github.io/react/img/logo_og.png';

class ImageViews extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{width: 200, height: 200}} source={imgA}>
                        <Text style={{fontSize: 40, color: 'steelblue'}}>
                            CaMnter
                        </Text>
                    </Image>
                    <Image style={{width: 200, height: 200}}
                           source={require('../../img/img_girl_2.jpg')}/>
                    <Image source={{uri: facebookLogo}}
                           style={{width: 200, height: 200}}/>
                    <Image source={ {
                        '__packager_asset': true,
                        'uri': facebookLogo,
                        'width': 591,
                        'height': 573
                    }}/>
                </View>
            </ScrollView>

        );
    }
}

const Images = {
    ImageViews: ImageViews
}

module.exports = Images;