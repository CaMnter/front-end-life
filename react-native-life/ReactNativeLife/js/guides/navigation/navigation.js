/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {Button, ToastAndroid} from "react-native";
import {StackNavigator} from "react-navigation";

class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: "MainScreen"
    };

    render() {
        // 拿到 Navigation.navigate 方法
        let {navigate} = this.props.navigation;
        return (
            <Button
                title='Go to profile'
                onPress={() => {
                    navigate('Profile', {name: 'CaMnter'});
                }}/>
        );
    }
}

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: "ProfileScreen"
    };

    render() {
        return (
            <Button
                title='Profile screen'
                onPress={() => {
                    ToastAndroid.show('Save you from anything', ToastAndroid.SHORT);
                }}/>
        );
    }
}

// StackNavigator(RouteConfigs, StackNavigatorConfig)
const ZStackNavigator = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen}
});

const Navigation = {
    ZStackNavigator: ZStackNavigator
};

module.exports = Navigation;