/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    CameraRoll,
    Image,
    Slider,
    StyleSheet,
    Switch,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
const invariant = require('fbjs/lib/invariant');
import CameraRollView from '../../../RNTester/js/CameraRollView';
import AssetScaledImageExampleView from '../../../RNTester/js/AssetScaledImageExample';

class CameraRollExample extends Component {

    state = {
        groupTypes: 'SavedPhotos',
        sliderValue: 1,
        bigImages: true,
    };

    _cameraRollView: ?CameraRollView;

    render() {
        return (
            <View>
                <Switch
                    onValueChange={this._onSwitchChange}
                    value={this.state.bigImages}
                />
                <Text>{(this.state.bigImages ? 'Big' : 'Small') + ' Images'}</Text>
                <Slider
                    value={this.state.sliderValue}
                    onValueChange={this._onSliderChange}
                />
                <Text>{'Group Type: ' + this.state.groupTypes}</Text>
                <CameraRollView
                    ref={ref => {
                        this._cameraRollView = ref;
                    }}
                    batchSize={20}
                    groupTypes={this.state.groupTypes}
                    renderImage={this._renderImage}
                />
            </View>
        );
    };

    loadAsset(asset) {
        if (this.props.navigator) {
            this.props.navigator.push({
                title: 'Camera Roll Image',
                component: AssetScaledImageExampleView,
                backButtonTitle: 'Back',
                passProps: {asset: asset},
            });
        }
    };

    _renderImage = asset => {
        const imageSize = this.state.bigImages ? 150 : 75;
        const imageStyle = [styles.image, {width: imageSize, height: imageSize}];
        const {location} = asset.node;
        const locationStr = location
            ? JSON.stringify(location)
            : 'Unknown location';
        return (
            <TouchableOpacity key={asset} onPress={this.loadAsset.bind(this, asset)}>
                <View style={styles.row}>
                    <Image source={asset.node.image} style={imageStyle}/>
                    <View style={styles.info}>
                        <Text style={styles.url}>{asset.node.image.uri}</Text>
                        <Text>{locationStr}</Text>
                        <Text>{asset.node.group_name}</Text>
                        <Text>{new Date(asset.node.timestamp).toString()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    _onSliderChange = value => {
        const options = Object.keys(CameraRoll.GroupTypesOptions);
        const index = Math.floor(value * options.length * 0.99);
        const groupTypes = options[index];
        if (groupTypes !== this.state.groupTypes) {
            this.setState({groupTypes: groupTypes});
        }
    };

    _onSwitchChange = value => {
        invariant(this._cameraRollView, 'ref should be set');
        this._cameraRollView.rendererChanged();
        this.setState({bigImages: value});
    };

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
    },
    url: {
        fontSize: 9,
        marginBottom: 14,
    },
    image: {
        margin: 4,
    },
    info: {
        flex: 1,
    },
});

const examples = {
    pagerTitle: '',
    pagerBlocks: [
        {
            title: 'Photos',
            render(): React.Component<any> {
                return <CameraRollExample />;
            }
        }
    ]
};

module.exports = {examples};
