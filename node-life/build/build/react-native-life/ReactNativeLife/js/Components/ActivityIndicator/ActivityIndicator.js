/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

type State = { animating: boolean; };
type Timer = number;

class ActivityIndicatorView extends Component {

    state: State;
    _timer: Timer;

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }


    setToggleTimeout() {
        this._timer = setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 2000);
    }

    componentDidMount() {
        this.setToggleTimeout();
    }


    componentWillUnmount() {
        clearTimeout(this._timer);
    }


    render() {
        return (
            <ScrollView>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 67}]}
                    size="large"/>
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="white"/>
                <View>
                    <ActivityIndicator
                        style={[styles.centering]}/>
                    <ActivityIndicator
                        style={[styles.centering, {backgroundColor: '#eeeeee'}]}/>
                </View>
                <View style={styles.horizontal}>
                    <ActivityIndicator color="#0000ff"/>
                    <ActivityIndicator color="#aa00aa"/>
                    <ActivityIndicator color="#aa3300"/>
                    <ActivityIndicator color="#00aa00"/>
                </View>
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    size="large"
                    color="white"/>
                <View style={styles.horizontal}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"/>
                    <ActivityIndicator
                        size="large"
                        color="#aa00aa"/>
                    <ActivityIndicator
                        size="large"
                        color="#aa3300"/>
                    <ActivityIndicator
                        size="large"
                        color="#00aa00"/>
                </View>
                <ActivityIndicator
                    style={[styles.centering, {transform: [{scale: 1.5}]}]}
                    size="large"/>
                <ActivityIndicator
                    style={styles.centering}
                    size={75}/>
            </ScrollView>
        );
    }

}

const ZActivityIndicator = {
    ActivityIndicatorView: ActivityIndicatorView
}

module.exports = ZActivityIndicator;

exports.displayName = (undefined: ?string);
exports.framework = 'React';
// exports.title = '<ActivityIndicator>';
exports.description = 'Animated loading indicators.';

exports.examples = [
    {
        title: 'Default (small, white)',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="white"
                />
            );
        }
    },
    {
        title: 'Gray',
        render() {
            return (
                <View>
                    <ActivityIndicator
                        style={[styles.centering]}
                    />
                    <ActivityIndicator
                        style={[styles.centering, {backgroundColor: '#eeeeee'}]}
                    />
                </View>
            );
        }
    },
    {
        title: 'Custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator color="#0000ff"/>
                    <ActivityIndicator color="#aa00aa"/>
                    <ActivityIndicator color="#aa3300"/>
                    <ActivityIndicator color="#00aa00"/>
                </View>
            );
        }
    },
    {
        title: 'Large',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    size="large"
                    color="white"
                />
            );
        }
    },
    {
        title: 'Large, custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa00aa"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa3300"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#00aa00"
                    />
                </View>
            );
        }
    },
    {
        title: 'Start/stop',
        render() {
            // return <ToggleAnimatingActivityIndicator />;
        }
    },
    {
        title: 'Custom size',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, {transform: [{scale: 1.5}]}]}
                    size="large"
                />
            );
        }
    },
    {
        platform: 'android',
        title: 'Custom size (size: 75)',
        render() {
            return (
                <ActivityIndicator
                    style={styles.centering}
                    size={75}
                />
            );
        }
    },
];


const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});