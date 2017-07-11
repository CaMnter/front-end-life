/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    NetInfo,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

class ConnectionInfoView extends Component {

    state = {
        connectionInfoHistory: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        NetInfo.addEventListener(
            'change',
            this._handleConnectionInfoChange
        );
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'change',
            this._handleConnectionInfoChange
        );
    }

    _handleConnectionInfoChange = (connectionInfo) => {
        let connectionInfoHistory = this.state.connectionInfoHistory.slice();
        connectionInfoHistory.push(connectionInfo);
        this.setState({connectionInfoHistory});
    };

    render() {
        return (
            <View>
                <Text>
                    {JSON.stringify(this.state.connectionInfoHistory)}
                </Text>
            </View>
        );
    }

}

class ConnectionInfoCurrentView extends Component {

    state = {
        connectionInfo: null
    };

    componentDidMount() {
        NetInfo.addEventListener(
            'change',
            this._handleConnectionInfoChange
        );
        NetInfo.fetch().done((connectionInfo) => {
            this.setState({connectionInfo});
        });
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'change',
            this._handleConnectionInfoChange
        )
    }

    _handleConnectionInfoChange = (connectionInfo) => {
        this.setState({connectionInfo});
    };


    render() {
        return (
            <View>
                <Text>
                    {this.state.connectionInfo}
                </Text>
            </View>
        );
    }

}

class IsConnectedView extends Component {

    state = {
        isConnected: null
    };

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'change',
            this._handleConnectivityChange
        );
        NetInfo.isConnected.fetch().done((isConnected) => {
            this.setState({isConnected});
        });
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'change',
            this._handleConnectivityChange
        );
    }

    _handleConnectivityChange = (isConnected) => {
        this.setState({isConnected});
    };

    render() {
        return (
            <View>
                <Text>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
            </View>
        );
    }

}

class IsConnectionExpensiveView extends Component {

    state = {
        isConnectionExpensive: (null: ?boolean)
    };

    _handleIsConnectionExpensive = () => {
        NetInfo.isConnectionExpensive().then(
            isConnectionExpensive => {
                this.setState({isConnectionExpensive});
            }
        );
    };

    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={this._handleIsConnectionExpensive}>
                    <View>
                        <Text>
                            isConnectionExpensive:
                            {this.state.isConnectionExpensive === true ?
                                'Expensive' :
                                this.state.isConnectionExpensive === false ?
                                    'Not expensive' :
                                    'Unknown'
                            }
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

}

const examples = {
    pagerTitle: 'NetInfo examples',
    pagerBlocks: [
        {
            title: 'NetInfo.isConnected',
            description: 'Asynchronously load and observe connectivity',
            render(): React.Element<any> {
                return <IsConnectedView />;
            }
        },
        {
            title: 'NetInfo.update',
            description: 'Asynchronously load and observe connectionInfo',
            render(): React.Element<any> {
                return <ConnectionInfoCurrentView />;
            }
        },
        {
            title: 'NetInfo.updateHistory',
            description: 'Observed updates to connectionInfo',
            render(): React.Element<any> {
                return <ConnectionInfoView />;
            }
        },
        {
            platform: 'android',
            title: 'NetInfo.isConnectionExpensive (Android)',
            description: 'Asynchronously check isConnectionExpensive',
            render(): React.Element<any> {
                return <IsConnectionExpensiveView />;
            }
        }
    ]
};

module.exports = {examples};