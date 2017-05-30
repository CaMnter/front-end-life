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
        <RNTesterBlock title={block.title} key={index}>
            {block.render()}
        </RNTesterBlock>;

    _renderBlock(blocks: Array) {
        return Array.from(blocks).map(this._createBlock);
        console.log(blocks);
    }

    _renderPager() {
        return (
            <RNTesterPage title={this.props.pagerTitle}>
                {[...this._renderBlock(this.props.pagerBlocks)]}
            </RNTesterPage>
        );
    }

    render() {
        return (this._renderPager());
    }

}

module.exports = {
    ExamplePager: ExamplePager
};