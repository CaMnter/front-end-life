/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    PermissionsAndroid,
    Picker,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';

const Item = Picker.Item;

class PermissionsAndroidExample extends Component {

    state = {
        permission: PermissionsAndroid.PERMISSIONS.CAMERA,
        hasPermission: 'Not Checked',
    };

    _onSelectPermission = (permission: string) => {
        this.setState({
            permission: permission,
        });
    };

    _checkPermission = async () => {
        let result = await PermissionsAndroid.check(this.state.permission);
        this.setState({
            hasPermission: (result ? 'Granted' : 'Revoked') + ' for ' +
            this.state.permission,
        });
    };

    _requestPermission = async () => {
        let result = await PermissionsAndroid.request(
            this.state.permission,
            {
                title: 'Permission Explanation',
                message: 'The app needs the following permission ' + this.state.permission +
                ' because of reasons. Please approve.'
            },
        );

        this.setState({
            hasPermission: result + ' for ' +
            this.state.permission,
        });
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Permission Name:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.permission}
                    onValueChange={this._onSelectPermission.bind(this)}>
                    <Item label={PermissionsAndroid.PERMISSIONS.CAMERA}
                          value={PermissionsAndroid.PERMISSIONS.CAMERA}/>
                    <Item label={PermissionsAndroid.PERMISSIONS.READ_CALENDAR}
                          value={PermissionsAndroid.PERMISSIONS.READ_CALENDAR}/>
                    <Item label={PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION}
                          value={PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION}/>
                </Picker>
                <TouchableWithoutFeedback onPress={this._checkPermission}>
                    <View>
                        <Text style={[styles.touchable, styles.text]}>Check Permission</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>Permission Status: {this.state.hasPermission}</Text>
                <TouchableWithoutFeedback onPress={this._requestPermission}>
                    <View>
                        <Text style={[styles.touchable, styles.text]}>Request Permission</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    singleLine: {
        fontSize: 16,
        padding: 4,
    },
    text: {
        margin: 10,
    },
    touchable: {
        color: '#007AFF',
    },
    picker: {
        flex: 1,
    }
});

const examples = {
    pagerTitle: 'Permissions examples',
    pagerBlocks: [
        {
            title: 'Permissions Example',
            description: 'Short example of how to use the runtime permissions API introduced in Android M.',
            render: () => <PermissionsAndroidExample />
        }
    ]
};

module.exports = {examples};