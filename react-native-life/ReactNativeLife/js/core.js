/**
 * @author CaMnter
 */

import React from "react";
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
class ExamplePager extends React.Component {

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

class SmartPager extends React.Component {

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

module.exports = {
    ExamplePager: ExamplePager,
    SmartPager: SmartPager
};