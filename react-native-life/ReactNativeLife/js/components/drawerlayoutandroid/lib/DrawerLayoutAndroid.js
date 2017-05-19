/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {DrawerLayoutAndroid, Text, View} from "react-native";

class DrawerLayoutView extends Component {

    constructor() {
        super();
    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Save you from
                    anything</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Save</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>You</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }

}

module.exports = {
    DrawerLayoutView: DrawerLayoutView
}