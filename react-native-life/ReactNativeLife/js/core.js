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

    _createBlock = (block) =>
        <RNTesterBlock title={block.title}>
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