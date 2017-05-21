/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    Image,
    Platform, ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

let base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

let ImageCapInsetsExample = require('../../../RNTester/js/ImageCapInsetsExample');
const IMAGE_PREFETCH_URL = 'http://origami.design/public/images/bird-logo.png?r=1&t=' + Date.now();

let fullImage = {uri: 'https://facebook.github.io/react/img/logo_og.png'};
let smallImage = {uri: 'https://facebook.github.io/react/img/logo_small_2x.png'};

let prefetchTask = Image.prefetch(IMAGE_PREFETCH_URL);


class NetworkImageCallbackExample extends Component {
    getInitialState() {
        return {
            events: [],
            startLoadPrefetched: false,
            mountTime: new Date(),
        };
    }

    componentWillMount() {
        this.setState(this.getInitialState());
    }

    render() {
        var {mountTime} = this.state;
        return (
            <View>
                <Image
                    source={this.props.source}
                    style={[styles.base, {overflow: 'visible'}]}
                    onLoadStart={() => this._loadEventFired(`✔ onLoadStart (+${new Date() - mountTime}ms)`)}
                    onLoad={(event) => {
                        // Currently this image source feature is only available on iOS.
                        if (event.nativeEvent.source) {
                            const url = event.nativeEvent.source.url;
                            this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms) for URL ${url}`);
                        } else {
                            this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms)`);
                        }
                    }}
                    onLoadEnd={() => {
                        this._loadEventFired(`✔ onLoadEnd (+${new Date() - mountTime}ms)`);
                        this.setState({startLoadPrefetched: true}, () => {
                            prefetchTask.then(() => {
                                this._loadEventFired(`✔ Prefetch OK (+${new Date() - mountTime}ms)`);
                            }, error => {
                                this._loadEventFired(`✘ Prefetch failed (+${new Date() - mountTime}ms)`);
                            });
                        });
                    }}
                />
                {this.state.startLoadPrefetched ?
                    <Image
                        source={this.props.prefetchedSource}
                        style={[styles.base, {overflow: 'visible'}]}
                        onLoadStart={() => this._loadEventFired(`✔ (prefetched) onLoadStart (+${new Date() - mountTime}ms)`)}
                        onLoad={(event) => {
                            // Currently this image source feature is only available on iOS.
                            if (event.nativeEvent.source) {
                                const url = event.nativeEvent.source.url;
                                this._loadEventFired(`✔ (prefetched) onLoad (+${new Date() - mountTime}ms) for URL ${url}`);
                            } else {
                                this._loadEventFired(`✔ (prefetched) onLoad (+${new Date() - mountTime}ms)`);
                            }
                        }}
                        onLoadEnd={() => this._loadEventFired(`✔ (prefetched) onLoadEnd (+${new Date() - mountTime}ms)`)}
                    />
                    : null}
                <Text style={{marginTop: 20}}>
                    {this.state.events !== undefined ? this.state.events.join('\n') : 'undefined'}
                </Text>
            </View>
        );
    }

    _loadEventFired(event) {
        this.setState((state) => {
            return state.events = [...state.events, event];
        });
    }
}

class NetworkImageExample extends Component {
    getInitialState() {
        return {
            error: false,
            loading: false,
            progress: 0
        };
    }


    componentWillMount() {
        this.setState(this.getInitialState());
    }

    render() {
        var loader = this.state.loading ?
            <View style={styles.progress}>
                <Text>{this.state.progress}%</Text>
                <ActivityIndicator style={{marginLeft: 5}}/>
            </View> : null;
        return this.state.error ?
            <Text>{this.state.error}</Text> :
            <Image
                source={this.props.source}
                style={[styles.base, {overflow: 'visible'}]}
                onLoadStart={(e) => this.setState({loading: true})}
                onError={(e) => this.setState({error: e.nativeEvent.error, loading: false})}
                onProgress={(e) => this.setState({progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total)})}
                onLoad={() => this.setState({loading: false, error: false})}>
                {loader}
            </Image>;
    }
}


class ImageSizeExample extends Component {
    getInitialState() {
        return {
            width: 0,
            height: 0,
        };
    }

    componentWillMount() {
        this.setState(this.getInitialState());
    }

    componentDidMount() {
        Image.getSize(this.props.source.uri, (width, height) => {
            this.setState({width, height});
        });
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'transparent',
                        marginRight: 10,
                    }}
                    source={this.props.source}/>
                <Text>
                    Actual dimensions:{'\n'}
                    Width: {this.state.width}, Height: {this.state.height}
                </Text>
            </View>
        );
    }
}

class MultipleSourcesExample extends Component {
    getInitialState() {
        return {
            width: 30,
            height: 30,
        };
    }

    componentWillMount() {
        this.setState(this.getInitialState());
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text
                        style={styles.touchableText}
                        onPress={this.decreaseImageSize}>
                        Decrease image size
                    </Text>
                    <Text
                        style={styles.touchableText}
                        onPress={this.increaseImageSize}>
                        Increase image size
                    </Text>
                </View>
                <Text>Container image size: {this.state.width}x{this.state.height} </Text>
                <View
                    style={{height: this.state.height, width: this.state.width}}>
                    <Image
                        style={{flex: 1}}
                        source={[
                            {
                                uri: 'https://facebook.github.io/react/img/logo_small.png',
                                width: 38,
                                height: 38
                            },
                            {
                                uri: 'https://facebook.github.io/react/img/logo_small_2x.png',
                                width: 76,
                                height: 76
                            },
                            {
                                uri: 'https://facebook.github.io/react/img/logo_og.png',
                                width: 400,
                                height: 400
                            }
                        ]}
                    />
                </View>
            </View>
        );
    }

    increaseImageSize() {
        if (this.state.width >= 100) {
            return;
        }
        this.setState({
            width: this.state.width + 10,
            height: this.state.height + 10,
        });
    }

    decreaseImageSize() {
        if (this.state.width <= 10) {
            return;
        }
        this.setState({
            width: this.state.width - 10,
            height: this.state.height - 10,
        });
    }
}

function getExamplesView() {
    return (
        <View>
            <Image
                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                style={styles.base}/>
            <View style={styles.horizontal}>
                <Image source={require('../../../RNTester/js/Thumbnails/uie_thumb_normal.png')}
                       style={styles.icon}/>
                <Image source={require('../../../RNTester/js/Thumbnails/uie_thumb_selected.png')}
                       style={styles.icon}/>
                <Image source={require('../../../RNTester/js/Thumbnails/uie_comment_normal.png')}
                       style={styles.icon}/>
                <Image
                    source={require('../../../RNTester/js/Thumbnails/uie_comment_highlighted.png')}
                    style={styles.icon}/>
            </View>
            <NetworkImageCallbackExample
                source={{uri: 'http://origami.design/public/images/bird-logo.png?r=1&t=' + Date.now()}}
                prefetchedSource={{uri: IMAGE_PREFETCH_URL}}/>
            <NetworkImageExample
                source={{uri: 'https://TYPO_ERROR_facebook.github.io/react/img/logo_og.png'}}/>
            <NetworkImageExample
                source={{uri: 'http://origami.design/public/images/bird-logo.png?r=1'}}/>
            <Image
                defaultSource={require('../../../RNTester/js/Thumbnails/bunny.png')}
                source={{uri: 'https://facebook.github.io/origami/public/images/birds.jpg'}}
                style={styles.base}/>
            <View style={styles.horizontal}>
                <Image
                    defaultSource={require('../../../RNTester/js/Thumbnails/bunny.png')}
                    source={{
                        uri: smallImage.uri + '?cacheBust=notinCache' + Date.now(),
                        cache: 'only-if-cached'
                    }}
                    style={styles.base}/>
                <Image
                    defaultSource={require('../../../RNTester/js/Thumbnails/bunny.png')}
                    source={{
                        uri: smallImage.uri + '?cacheBust=notinCache' + Date.now(),
                        cache: 'reload'
                    }}
                    style={styles.base}/>
            </View>
            <View style={styles.horizontal}>
                <Image
                    source={smallImage}
                    style={[
                        styles.base,
                        styles.background,
                        {borderWidth: 3, borderColor: '#f099f0'}
                    ]}/>
            </View>
            <View style={styles.horizontal}>
                <Image
                    source={smallImage}
                    style={[
                        styles.base,
                        styles.background,
                        {borderWidth: 5, borderColor: '#f099f0'}
                    ]}/>
            </View>
            <View style={styles.horizontal}>
                <Image
                    style={[styles.base, {borderRadius: 5}]}
                    source={fullImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {borderRadius: 19}]}
                    source={fullImage}/>
            </View>
            <View style={styles.horizontal}>
                <Image source={smallImage} style={styles.base}/>
                <Image
                    style={[
                        styles.base,
                        styles.leftMargin,
                        {backgroundColor: 'rgba(0, 0, 100, 0.25)'}
                    ]}
                    source={smallImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {backgroundColor: 'red'}]}
                    source={smallImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {backgroundColor: 'black'}]}
                    source={smallImage}/>
            </View>
            <View style={styles.horizontal}>
                <Image
                    style={[styles.base, {opacity: 1}]}
                    source={fullImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {opacity: 0.8}]}
                    source={fullImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {opacity: 0.6}]}
                    source={fullImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {opacity: 0.4}]}
                    source={fullImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {opacity: 0.2}]}
                    source={fullImage}/>
                <Image
                    style={[styles.base, styles.leftMargin, {opacity: 0}]}
                    source={fullImage}/>
            </View>
            <Image
                style={{width: 60, height: 60, backgroundColor: 'transparent'}}
                source={fullImage}>
                <Text style={styles.nestedText}>
                    React
                </Text>
            </Image>
            <View>
                <View style={styles.horizontal}>
                    <Image
                        source={require('../../../RNTester/js/Thumbnails/uie_thumb_normal.png')}
                        style={[styles.icon, {borderRadius: 5, tintColor: '#5ac8fa'}]}/>
                    <Image
                        source={require('../../../RNTester/js/Thumbnails/uie_thumb_normal.png')}
                        style={[styles.icon, styles.leftMargin, {
                            borderRadius: 5,
                            tintColor: '#4cd964'
                        }]}/>
                    <Image
                        source={require('../../../RNTester/js/Thumbnails/uie_thumb_normal.png')}
                        style={[styles.icon, styles.leftMargin, {
                            borderRadius: 5,
                            tintColor: '#ff2d55'
                        }]}/>
                    <Image
                        source={require('../../../RNTester/js/Thumbnails/uie_thumb_normal.png')}
                        style={[styles.icon, styles.leftMargin, {
                            borderRadius: 5,
                            tintColor: '#8e8e93'
                        }]}/>
                </View>
                <Text style={styles.sectionText}>
                    It also works with downloaded images:
                </Text>
                <View style={styles.horizontal}>
                    <Image
                        source={smallImage}
                        style={[styles.base, {borderRadius: 5, tintColor: '#5ac8fa'}]}/>
                    <Image
                        source={smallImage}
                        style={[styles.base, styles.leftMargin, {
                            borderRadius: 5,
                            tintColor: '#4cd964'
                        }]}/>
                    <Image
                        source={smallImage}
                        style={[styles.base, styles.leftMargin, {
                            borderRadius: 5,
                            tintColor: '#ff2d55'
                        }]}/>
                    <Image
                        source={smallImage}
                        style={[styles.base, styles.leftMargin, {
                            borderRadius: 5,
                            tintColor: '#8e8e93'
                        }]}/>
                </View>
                <View>
                    {[smallImage, fullImage].map((image, index) => {
                        return (
                            <View key={index}>
                                <View style={styles.horizontal}>
                                    <View>
                                        <Text style={[styles.resizeModeText]}>
                                            Contain
                                        </Text>
                                        <Image
                                            style={styles.resizeMode}
                                            resizeMode={Image.resizeMode.contain}
                                            source={image}/>
                                    </View>
                                    <View style={styles.leftMargin}>
                                        <Text style={[styles.resizeModeText]}>
                                            Cover
                                        </Text>
                                        <Image
                                            style={styles.resizeMode}
                                            resizeMode={Image.resizeMode.cover}
                                            source={image}/>
                                    </View>
                                </View>
                                <View style={styles.horizontal}>
                                    <View>
                                        <Text style={[styles.resizeModeText]}>
                                            Stretch
                                        </Text>
                                        <Image
                                            style={styles.resizeMode}
                                            resizeMode={Image.resizeMode.stretch}
                                            source={image}/>
                                    </View>
                                    { Platform.OS === 'ios' ?
                                        <View style={styles.leftMargin}>
                                            <Text style={[styles.resizeModeText]}>
                                                Repeat
                                            </Text>
                                            <Image
                                                style={styles.resizeMode}
                                                resizeMode={Image.resizeMode.repeat}
                                                source={image}/>
                                        </View>
                                        : null
                                    }
                                    { Platform.OS === 'android' ?
                                        <View style={styles.leftMargin}>
                                            <Text style={[styles.resizeModeText]}>
                                                Center
                                            </Text>
                                            <Image
                                                style={styles.resizeMode}
                                                resizeMode={Image.resizeMode.center}
                                                source={image}/>
                                        </View>
                                        : null
                                    }
                                </View>
                            </View>
                        );
                    })}
                </View>
                <Image
                    style={styles.gif}
                    source={{uri: 'https://38.media.tumblr.com/9e9bd08c6e2d10561dd1fb4197df4c4e/tumblr_mfqekpMktw1rn90umo1_500.gif'}}/>
                <Image
                    style={styles.base64}
                    source={{uri: base64Icon, scale: 3}}/>
                <ImageCapInsetsExample />
                <ImageSizeExample source={fullImage}/>
                <MultipleSourcesExample />
                <Image
                    source={{uri: 'legacy_image', width: 120, height: 120}}/>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        source={{
                            uri: 'ImageInBundle',
                            bundle: 'RNTesterBundle',
                            width: 100,
                            height: 100,
                        }}
                        style={{borderColor: 'yellow', borderWidth: 4}}/>
                    <Image
                        source={{
                            uri: 'ImageInAssetCatalog',
                            bundle: 'RNTesterBundle',
                            width: 100,
                            height: 100,
                        }}
                        style={{marginLeft: 10, borderColor: 'blue', borderWidth: 4}}/>
                </View>
                <View style={styles.horizontal}>
                    <Image
                        style={[styles.base,]}
                        source={fullImage}
                        blurRadius={0}/>
                    <Image
                        style={[styles.base, styles.leftMargin]}
                        source={fullImage}
                        blurRadius={5}/>
                    <Image
                        style={[styles.base, styles.leftMargin]}
                        source={fullImage}
                        blurRadius={10}/>
                    <Image
                        style={[styles.base, styles.leftMargin]}
                        source={fullImage}
                        blurRadius={15}/>
                    <Image
                        style={[styles.base, styles.leftMargin]}
                        source={fullImage}
                        blurRadius={20}/>
                    <Image
                        style={[styles.base, styles.leftMargin]}
                        source={fullImage}
                        blurRadius={25}/>
                </View>
            </View>
        </View>
    );
}

class ImageViewExample extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ScrollView>
                {getExamplesView()}
            </ScrollView>
        );
    }
}


let styles = StyleSheet.create({
    base: {
        width: 38,
        height: 38,
    },
    progress: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: 100
    },
    leftMargin: {
        marginLeft: 10,
    },
    background: {
        backgroundColor: '#222222'
    },
    sectionText: {
        marginVertical: 6,
    },
    nestedText: {
        marginLeft: 12,
        marginTop: 20,
        backgroundColor: 'transparent',
        color: 'white'
    },
    resizeMode: {
        width: 90,
        height: 60,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    resizeModeText: {
        fontSize: 11,
        marginBottom: 3,
    },
    icon: {
        width: 15,
        height: 15,
    },
    horizontal: {
        flexDirection: 'row',
    },
    gif: {
        flex: 1,
        height: 200,
    },
    base64: {
        flex: 1,
        height: 50,
        resizeMode: 'contain',
    },
    touchableText: {
        fontWeight: '500',
        color: 'blue',
    },
});

module.exports = {
    ImageViewExample: ImageViewExample
}