/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class GeolocationExample extends Component {

    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
    };

    watchID: ?number = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition(
            (position) => {
                let lastPosition = JSON.stringify(position);
                this.setState({lastPosition});
            }
        );
    }

    componentWillUnmount() {
        this.watchID != null && navigator.geolocation.clearWatch(this.watchID);
    }


    render() {
        return (
            <View>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {this.state.initialPosition}
                </Text>
                <Text>
                    <Text style={styles.title}>Current position: </Text>
                    {this.state.lastPosition}
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    }
});

const examples = {
    pagerTitle: 'Geolocation examples',
    pagerBlocks: [
        {
            title: 'navigator.geolocation',
            render: function (): React.Element<any> {
                return <GeolocationExample />;
            }
        }
    ]
};

module.exports = {examples};