/**
 * @author CaMnter
 */
'use strict';

import React from 'react';
import {
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} from  'react-native';

import RNTesterPage from '../../../RNTester/js/RNTesterPage';

let ListViewSimpleExample = React.createClass({
    statics: {
        title: '<ListView>',
        description: 'Performant, scrollable list of data.'
    },

    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows({})),
        };
    },

    _pressData: ({}: { [key: number]: boolean }),

    componentWillMount: function () {
        this._pressData = {};
    },

    render: function () {
        return (
            <RNTesterPage
                title={this.props.navigator ? null : '<ListView>'}
                noSpacer={true}
                noScroll={true}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeparator}/>
            </RNTesterPage>
        );
    },

    _renderRow: function (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        var rowHash = Math.abs(hashCode(rowData));
        var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
        return (
            <TouchableHighlight onPress={() => {
                this._pressRow(rowID);
                highlightRow(sectionID, rowID);
            }}>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource}/>
                        <Text style={styles.text}>
                            {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    },

    _genRows: function (pressData: { [key: number]: boolean }): Array<string> {
        var dataBlob = [];
        for (var ii = 0; ii < 100; ii++) {
            var pressedText = pressData[ii] ? ' (pressed)' : '';
            dataBlob.push('Row ' + ii + pressedText);
        }
        return dataBlob;
    },

    _pressRow: function (rowID: number) {
        this._pressData[rowID] = !this._pressData[rowID];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                this._genRows(this._pressData)
            )
        });
    },

    _renderSeparator: function (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
        );
    }
});

var THUMB_URLS = [
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
var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
var hashCode = function (str) {
    var hash = 15;
    for (var ii = str.length - 1; ii >= 0; ii--) {
        hash = ((hash << 5) - hash) + str.charCodeAt(ii);
    }
    return hash;
};

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
    },
});

module.exports = {
    ListViewSimpleExample: ListViewSimpleExample
}