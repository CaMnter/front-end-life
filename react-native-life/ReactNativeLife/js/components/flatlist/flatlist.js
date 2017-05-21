/**
 * @author CaMnter
 */

import React, {Component, PureComponent} from 'react';
import {FlatList, Text, View, StyleSheet} from "react-native";

class FlatListItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{this.props.fruit}</Text>
                <View style={{
                    backgroundColor: this.props.itemColor,
                    flex: 1
                }}/>
            </View>
        );
    }

}

fruits = [
    {id: 1, fruit: "Apple", color: "#55ED5C"},
    {id: 2, fruit: "Banana", color: "#E8F442"},
    {id: 3, fruit: "Mango", color: "#FF8040"},
    {id: 4, fruit: "Peach", color: "#FFE5B4"},
    {id: 5, fruit: "Tomato", color: "#D62424"},
]

class FlatListView extends PureComponent {

    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        this.setState(
            (state) => {
                let selected = new Map(state.selected);
                selected.set(id, !state.get(id));
                return selected;
            }
        );
    };

    _renderSimpleItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{item.fruit}</Text>
                <View style={{
                    backgroundColor: item.color,
                    flex: 1
                }}/>
            </View>
        );
    };

    // TODO Not Displayed
    _renderItem = ({item}) => {
        return (
            <FlatListItem
                id={item.id}
                onPressItem={this._onPressItem}
                selected={!!this.state.selected.get(item.key)}
                fruit={item.fruit}
                itemColor={item.color}/>
        );
    };


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={fruits}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}/>
        );
    }

}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    text: {
        fontSize: 30,
        flex: 1
    }
});

module.exports = {
    FlatListItem: FlatListItem,
    FlatListView: FlatListView
}