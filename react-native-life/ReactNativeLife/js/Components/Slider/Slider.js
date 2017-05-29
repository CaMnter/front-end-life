/**
 * @author CaMnter
 */

import * as React from "react";
import {
    Slider,
    Text,
    StyleSheet,
    View,
} from 'react-native';
import RNTesterBlock from '../../../RNTester/js/RNTesterBlock';
import RNTesterPage from '../../../RNTester/js/RNTesterPage';

class SimpleSliderView extends React.Component {

    static defaultProps = {
        value: 0,
    };

    state = {
        value: this.props.value,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>
                    {this.state.value && +this.state.value.toFixed(3)}
                </Text>
                <Slider
                    {...this.props}
                    onValueChange={(value) => this.setState({value: value})}/>
            </View>
        );
    }

}

class SimpleSlidingCompleteView extends React.Component {

    state = {
        slideCompletionValue: 0,
        slideCompletionCount: 0,
    };

    render() {
        return (
            <View>
                <SimpleSliderView
                    {...this.props}
                    onSlidingComplete={(value) => this.setState({
                        slideCompletionValue: value,
                        slideCompletionCount: this.state.slideCompletionCount + 1
                    })}/>
                <Text>
                    Completions: {this.state.slideCompletionCount}
                    Value: {this.state.slideCompletionValue}
                </Text>
            </View>
        );
    }

}

class SlidingExample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RNTesterPage title="Sliding Examples">
                <RNTesterBlock title="Default settings">
                    <SimpleSliderView/>
                </RNTesterBlock>

                <RNTesterBlock title="Initial value: 0.5">
                    <SimpleSliderView value={0.5}/>
                </RNTesterBlock>

                <RNTesterBlock title="minimumValue: -1, maximumValue: 2">
                    <SimpleSliderView
                        minimumValue={-1}
                        maximumValue={2}/>
                </RNTesterBlock>

                <RNTesterBlock title="step: 0.25">
                    <SimpleSliderView step={0.25}/>
                </RNTesterBlock>

                <RNTesterBlock title="onSlidingComplete">
                    <SimpleSlidingCompleteView/>
                </RNTesterBlock>

                <RNTesterBlock title="Custom min/max track tint color">
                    <SimpleSliderView
                        minimumTrackTintColor={'blue'}
                        maximumTrackTintColor={'red'}
                        value={0.5}/>
                </RNTesterBlock>

                <RNTesterBlock title="Custom thumb color">
                    <SimpleSliderView thumbTintColor={'blue'}/>
                </RNTesterBlock>

                <RNTesterBlock title="Custom thumb image">
                    <SimpleSliderView
                        thumbImage={require('../../../RNTester/js/Thumbnails/uie_thumb_big.png')}/>
                </RNTesterBlock>

                <RNTesterBlock title="Custom thumb image">
                    <SimpleSliderView
                        trackImage={require('../../../RNTester/js/Thumbnails/slider.png')}/>
                </RNTesterBlock>

                <RNTesterBlock title="Custom min/max track image">
                    <SimpleSliderView
                        minimumTrackImage={require('../../../RNTester/js/Thumbnails/slider-left.png')}
                        maximumTrackImage={require('../../../RNTester/js/Thumbnails/slider-right.png')}
                    />
                </RNTesterBlock>
            </RNTesterPage>
        );
    }

}


const styles = StyleSheet.create({
    slider: {
        height: 10,
        margin: 10,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
    },
});

module.exports = {
    SlidingExample: SlidingExample
}