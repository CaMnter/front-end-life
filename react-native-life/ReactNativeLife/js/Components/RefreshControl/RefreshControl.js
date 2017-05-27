/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    RefreshControl,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

class Row extends Component {

    constructor() {
        super();
    };

    _onClick = () => {
        this.props.onClick(this.props.data);
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

}

class RefreshControlExample extends Component {

    static title = '<RefreshControl>';
    static description = 'Adds pull-to-refresh support to a scrollview.';

    state = {
        isRefreshing: false,
        loaded: 0,
        rowData: Array.from(new Array(20)).map(
            (value, index) => ({text: 'Initial row ' + index, clicks: 0})),
    };

    _onClick = (row) => {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    };

    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick}/>;
        });
        return (
            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#ffffff"
                        colors={['#000000', '#0000ff']}
                        progressBackgroundColor="#ffffff"
                    />
                }>
                {rows}
            </ScrollView>
        );
    };

    _onRefresh = () => {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            const rowData = Array.from(new Array(10))
                .map((value, index) => ({
                    text: 'Loaded row ' + (+this.state.loaded + index),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 3000);
    };

}

const styles = StyleSheet.create({
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollView: {
        flex: 1,
    },
});

module.exports = RefreshControlExample;