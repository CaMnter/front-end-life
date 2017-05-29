/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

class SimpleScrollView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _scrollView: ScrollView;
        return (
            <View>
                <ScrollView
                    ref={(scrollView) => {
                        _scrollView = scrollView;
                    }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => {
                        console.log('onScroll!');
                    }}
                    scrollEventThrottle={200}
                    style={styles.scrollView}>
                    {THUMB_URLS.map(createThumbRow)}
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        _scrollView.scrollTo({y: 0});
                    }}>
                    <Text>Scroll to top</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        _scrollView.scrollToEnd({animated: true});
                    }}>
                    <Text>Scroll to bottom</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

class ScrollViewExample extends Component {

    constructor(props) {
        super(props);
    }

    renderScrollView(title: string, addtionalStyles: typeof StyleSheet) {
        let _scrollView: ScrollView;
        return (
            <View style={addtionalStyles}>
                <Text style={styles.text}>{title}</Text>
                <ScrollView
                    ref={(scrollView) => {
                        _scrollView = scrollView;
                    }}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    style={[styles.scrollView, styles.horizontalScrollView]}>
                    {THUMB_URLS.map(createThumbRow)}
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        _scrollView.scrollTo({x: 0});
                    }}>
                    <Text>Scroll to start</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        _scrollView.scrollToEnd({animated: true});
                    }}>
                    <Text>Scroll to end</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <SimpleScrollView/>
                    {this.renderScrollView('LTR layout', {direction: 'ltr'})}
                    {this.renderScrollView('RTL layout', {direction: 'rtl'})}
                </View>
            </ScrollView>
        );
    }

}

class Thumb extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.thumb}>
                <Image style={styles.img} source={this.props.source}/>
            </View>
        );
    }

}

let THUMB_URLS = [
    require('../../../RNTester/js/Thumbnails/like.png'),
    require('../../../RNTester/js/Thumbnails/dislike.png'),
    require('../../../RNTester/js/Thumbnails/call.png'),
    require('../../../RNTester/js/Thumbnails/fist.png'),
    require('../../../RNTester/js/Thumbnails/bandaged.png'),
    require('../../../RNTester/js/Thumbnails/flowers.png'),
    require('../../../RNTester/js/Thumbnails/heart.png'),
    require('../../../RNTester/js/Thumbnails/liking.png'),
    require('../../../RNTester/js/Thumbnails/party.png'),
    require('../../../RNTester/js/Thumbnails/poke.png'),
    require('../../../RNTester/js/Thumbnails/superlike.png'),
    require('../../../RNTester/js/Thumbnails/victory.png'),
];

THUMB_URLS = THUMB_URLS.concat(THUMB_URLS); // double length of THUMB_URLS

const createThumbRow = (uri, i) => <Thumb key={i} source={uri}/>;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#eeeeee',
        height: 300,
    },
    horizontalScrollView: {
        height: 106,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 5,
    },
    button: {
        margin: 5,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#cccccc',
        borderRadius: 3,
    },
    thumb: {
        margin: 5,
        padding: 5,
        backgroundColor: '#cccccc',
        borderRadius: 3,
        minWidth: 96,
    },
    img: {
        width: 64,
        height: 64,
    }
});

module.exports = {
    SimpleScrollView: SimpleScrollView,
    ScrollViewExample: ScrollViewExample
}
