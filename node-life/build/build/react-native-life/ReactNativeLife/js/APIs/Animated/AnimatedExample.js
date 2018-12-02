/**
 * @author CaMnter
 */

import React from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    View
} from 'react-native';
import RNTesterButton from '../../../RNTester/js/RNTesterButton';

const examples = {
    pagerTitle: 'Animated examples',
    pagerBlocks: [
        {
            title: 'FadeInView',
            description: 'Uses a simple timing animation to ' +
            'bring opacity from 0 to 1 when the component ' +
            'mounts.',
            render() {
                class FadeInView extends React.Component {

                    state: any;

                    constructor(props) {
                        super(props);
                        this.state = {
                            fadeAnim: new Animated.Value(0),
                        };
                    }

                    componentDidMount() {
                        Animated.timing(
                            this.state.fadeAnim,
                            {
                                toValue: 1,
                                duration: 2000,
                            },
                        ).start();
                    }

                    render() {
                        return (
                            <Animated.View
                                style={{
                                    opacity: this.state.fadeAnim,
                                }}>
                                {this.props.children}
                            </Animated.View>
                        );
                    }
                }

                class FadeInExample extends React.Component {
                    state: any;

                    constructor(props) {
                        super(props);
                        this.state = {
                            show: true,
                        };
                    }

                    render() {
                        return (
                            <View>
                                <RNTesterButton onPress={() => {
                                    this.setState((state) => (
                                        {show: !state.show}
                                    ));
                                }}>
                                    Press to {this.state.show ?
                                    'Hide' : 'Show'}
                                </RNTesterButton>
                                {this.state.show && <FadeInView>
                                    <View style={styles.content}>
                                        <Text>FadeInView</Text>
                                    </View>
                                </FadeInView>}
                            </View>
                        );
                    }
                }
                return <FadeInExample />;
            },
        },
        {
            title: 'Transform Bounce',
            description: 'One `Animated.Value` is driven by a ' +
            'spring with custom constants and mapped to an ' +
            'ordered set of transforms.  Each transform has ' +
            'an interpolation to convert the value into the ' +
            'right range and units.',
            render: function () {
                this.anim = this.anim || new Animated.Value(0);
                return (
                    <View>
                        <RNTesterButton onPress={() => {
                            Animated.spring(this.anim, {
                                toValue: 0,
                                velocity: 3,
                                tension: -10,
                                friction: 1,
                            }).start();
                        }}>
                            Press to Fling it!
                        </RNTesterButton>
                        <Animated.View
                            style={[styles.content, {
                                transform: [   // Array order matters
                                    {
                                        scale: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 4],
                                        })
                                    },
                                    {
                                        translateX: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 500],
                                        })
                                    },
                                    {
                                        rotate: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [
                                                '0deg', '360deg' // 'deg' or 'rad'
                                            ],
                                        })
                                    },
                                ]
                            }
                            ]}>
                            <Text>Transforms!</Text>
                        </Animated.View>
                    </View>
                );
            },
        },
        {
            title: 'Composite Animations with Easing',
            description: 'Sequence, parallel, delay, and ' +
            'stagger with different easing functions.',
            render: function () {
                this.anims = this.anims || [1, 2, 3].map(
                        () => new Animated.Value(0)
                    );
                return (
                    <View>
                        <RNTesterButton onPress={() => {
                            var timing = Animated.timing;
                            Animated.sequence([
                                timing(this.anims[0], {
                                    toValue: 200,
                                    easing: Easing.linear,
                                }),
                                Animated.delay(400),
                                timing(this.anims[0], {
                                    toValue: 0,
                                    easing: Easing.elastic(2),
                                }),
                                Animated.delay(400),
                                Animated.stagger(200,
                                    this.anims.map((anim) => timing(
                                        anim, {toValue: 200}
                                    )).concat(
                                        this.anims.map((anim) => timing(
                                            anim, {toValue: 0}
                                        ))),
                                ),
                                Animated.delay(400),
                                Animated.parallel([
                                    Easing.inOut(Easing.quad), // Symmetric
                                    Easing.back(1.5),  // Goes backwards first
                                    Easing.ease        // Default bezier
                                ].map((easing, ii) => (
                                    timing(this.anims[ii], {
                                        toValue: 320, easing, duration: 3000,
                                    })
                                ))),
                                Animated.delay(400),
                                Animated.stagger(200,
                                    this.anims.map((anim) => timing(anim, {
                                        toValue: 0,
                                        easing: Easing.bounce, // Like a ball
                                        duration: 2000,
                                    })),
                                ),
                            ]).start();
                        }}>
                            Press to Animate
                        </RNTesterButton>
                        {['Composite', 'Easing', 'Animations!'].map(
                            (text, ii) => (
                                <Animated.View
                                    key={text}
                                    style={[styles.content, {
                                        left: this.anims[ii]
                                    }]}>
                                    <Text>{text}</Text>
                                </Animated.View>
                            )
                        )}
                    </View>
                );
            },
        },
        {
            title: 'Continuous Interactions',
            description: 'Gesture events, chaining, 2D ' +
            'values, interrupting and transitioning ' +
            'animations, etc.',
            render: () => (
                <Text>Checkout the Gratuitous Animation App!</Text>
            ),
        }
    ]
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'deepskyblue',
        borderWidth: 1,
        borderColor: 'dodgerblue',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});

module.exports = {examples};
