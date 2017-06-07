/**
 * @author CaMnter
 */
import React, {Component} from 'react';
import {
    AppState,
    Text,
    View
} from 'react-native';

class AppStateView extends Component {

    state = {
        appState: AppState.currentState,
        previousAppStates: [],
        memoryWarning: 0
    };

    _handleAppStateChange = (appState) => {
        let previousAppStates = this.state.previousAppStates.slice();
        previousAppStates.push(this.state.appState);
        this.setState({
            appState,
            previousAppStates,
        });
    };

    _handleMemoryWarning = () => {
        this.setState({memoryWarnings: this.state.memoryWarnings + 1});
    };

    componentDidMount(): void {
        AppState.addEventListener('change', this._handleAppStateChange);
        AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
    }


    componentWillUnmount(): void {
        AppState.removeEventListener('change', this._handleAppStateChange);
        AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
    }


    render() {
        if (this.props.memoryWarnings) {
            return (
                <View>
                    <Text>{this.state.memoryWarning}</Text>
                </View>
            );
        }
        if (this.props.appState) {
            return (
                <View>
                    <Text>{this.state.appState}</Text>
                </View>
            );
        }
        return (
            <View>
                <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
            </View>
        );
    }

}

const examples = {
    pagerTitle: 'AppState examples',
    pagerBlocks: [
        {
            title: 'AppState.currentState',
            description: 'Can be null on app initialization',
            render() {
                return <Text>{AppState.currentState}</Text>;
            }
        },
        {
            title: 'Subscribed AppState:',
            description: 'This changes according to the current state, so you can only ever see it rendered as "active"',
            render(): React.Element<any> {
                return <AppStateView appState={true}/>;
            }
        },
        {
            title: 'Previous states:',
            render(): React.Element<any> {
                return <AppStateView appState={false}/>;
            }
        },
        {
            platform: 'ios',
            title: 'Memory Warnings',
            description: 'In the IOS simulator, hit Shift+Command+M to simulate a memory warning.',
            render(): React.Element<any> {
                return <AppStateView memoryWarnings={true}/>;
            }
        }
    ]
};

module.exports = {examples};