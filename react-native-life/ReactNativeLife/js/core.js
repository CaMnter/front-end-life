/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';
import RNTesterPage from '../RNTester/js/RNTesterPage';
import RNTesterBlock from '../RNTester/js/RNTesterBlock';

/**
 * props = {
 *      pagerTitle: String
 *      pagerBlocks: [
 *          {
 *              title: String
 *              render(): return React View
 *          }
 *      ]
 * }
 */
class ExamplePager extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * 需要添加  props.key 不然会有警告
     */
    _createBlock = (block, index) =>
        <RNTesterBlock title={block.title} key={index} description={block.description}>
            {block.render()}
        </RNTesterBlock>;

    _renderBlock(blocks: Array) {
        return Array.from(blocks).map(this._createBlock);
    }

    _renderPager() {
        return (
            <RNTesterPage
                title={this.props.pagerTitle}
                titleStyle={this.props.pagerTitleStyle}>
                {[...this._renderBlock(this.props.pagerBlocks)]}
            </RNTesterPage>
        );
    }

    render() {
        return (this._renderPager());
    }

}

class SmartPager extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExamplePager
                pagerTitleStyle={{textAlign: 'center',}}
                pagerTitle={this.props.examples.pagerTitle}
                pagerBlocks={this.props.examples.pagerBlocks}/>
        );
    }

}

/**
 * props = {
 *      textContent: String
 * }
 */
class SmartTouchableHighlight extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let highLightProps = {
            underlayColor: '#e5e5e5',
            style: [style.touchableHighlight]
        };
        return (
            <TouchableHighlight
                {...highLightProps}
                onPress={this.props.onPress}>
                <Text
                    style={[style.touchableHighlightText]}>
                    {this.props.textContent}
                </Text>
            </TouchableHighlight>
        );
    }

}

const style = StyleSheet.create({
    touchableHighlight: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touchableHighlightText: {
        flex: 1,
        flexGrow: 1,
        padding: 10,
        textAlign: 'center',
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = {
    ExamplePager: ExamplePager,
    SmartPager: SmartPager,
    SmartTouchableHighlight: SmartTouchableHighlight
};