/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    BackHandler, Text, TouchableHighlight, View, StyleSheet
} from 'react-native';

class BackHandlerExample extends Component {


    constructor(props) {
        super(props);
    }

    _goBack() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.goBack();
            return true;
        });
    }

    _exitApp() {
        BackHandler.exitApp();
    }

    render() {
        let highLightProps = {
            underlayColor: '#e5e5e5',
            style: [style.highLight]
        };
        return (
            <View>
                <TouchableHighlight
                    {...highLightProps}
                    onPress={this._goBack.bind(this)}>
                    <Text
                        style={[style.view]}>
                        Go back
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    {...highLightProps}
                    onPress={this._exitApp.bind(this)}>
                    <Text
                        style={[style.view]}>
                        Exit app
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

}

const style = StyleSheet.create({
    highLight: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view: {
        flex: 1,
        flexGrow: 1,
        padding: 10,
        textAlign: 'center',
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


const examples = {
    pagerTitle: 'BackHandler examples',
    pagerBlocks: [
        {
            title: 'exitApp and goBack',
            render(){
                return (
                    <BackHandlerExample/>
                );
            }
        }
    ]
}

module.exports = {examples};