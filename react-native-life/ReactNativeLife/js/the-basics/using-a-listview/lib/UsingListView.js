/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';

let camnter = 'CaMnter';
let save = 'Save you from anything';

class ZListView extends Component {
    constructor() {
        super();
        let dataSource = new ListView.DataSource({
            rowHasChanged: (rowA, rowB) => rowA !== rowB
        });
        this.state = {
            dataSource: dataSource.cloneWithRows([
                camnter, save, camnter, save, camnter, save, camnter, save, camnter, save,
                camnter, save, camnter, save, camnter, save, camnter, save, camnter, save,
                camnter, save, camnter, save, camnter, save, camnter, save, camnter, save,
                camnter, save, camnter, save, camnter, save, camnter, save, camnter, save,
                camnter, save, camnter, save, camnter, save, camnter, save, camnter, save,
                camnter, save, camnter, save, camnter, save, camnter, save, camnter, save
            ])
        };
    }

    render() {
        return (
            <View style={{flex: 1, padding: 16}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={data =>
                        <Text style={{fontSize: 16, color: 'steelblue'}}>
                            {data}
                        </Text>}/>
            </View>
        );
    }
}

const UsingListView = {
    ZListView: ZListView
};

module.exports = UsingListView;
