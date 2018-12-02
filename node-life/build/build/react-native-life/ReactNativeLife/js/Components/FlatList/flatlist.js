/**
 * @author CaMnter
 */

import React, {PureComponent} from 'react';
import {
    Animated,
    FlatList,
    Text,
    View,
    StyleSheet
} from "react-native";

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

/*
 * FlatListExample
 */

const RNTesterPage = require('../../../RNTester/js/RNTesterPage');

const infoLog = require('infoLog');

const {
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    ItemSeparatorComponent,
    PlainInput,
    SeparatorComponent,
    Spindicator,
    genItemData,
    getItemLayout,
    pressItem,
    renderSmallSwitchOption,
} = require('../../../RNTester/js/ListExampleShared');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const VIEWABILITY_CONFIG = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};

class FlatListExample extends PureComponent {
    static title = '<FlatList>';
    static description = 'Performant, scrollable list of data.';

    state = {
        data: genItemData(100),
        debug: false,
        horizontal: false,
        filterText: '',
        fixedHeight: true,
        logViewable: false,
        virtualized: true,
    };

    _onChangeFilterText = (filterText) => {
        this.setState({filterText});
    };

    _onChangeScrollToIndex = (text) => {
        this._listRef.getNode().scrollToIndex({viewPosition: 0.5, index: Number(text)});
    };

    _scrollPos = new Animated.Value(0);
    _scrollSinkX = Animated.event(
        [{nativeEvent: {contentOffset: {x: this._scrollPos}}}],
        {useNativeDriver: true},
    );
    _scrollSinkY = Animated.event(
        [{nativeEvent: {contentOffset: {y: this._scrollPos}}}],
        {useNativeDriver: true},
    );

    componentDidUpdate() {
        this._listRef.getNode().recordInteraction(); // e.g. flipping logViewable switch
    }

    render() {
        const filterRegex = new RegExp(String(this.state.filterText), 'i');
        const filter = (item) => (
            filterRegex.test(item.text) || filterRegex.test(item.title)
        );
        const filteredData = this.state.data.filter(filter);
        return (
            <RNTesterPage
                noSpacer={true}
                noScroll={true}>
                <View style={exampleStyles.container}>
                    <View style={exampleStyles.searchRow}>
                        <View style={exampleStyles.options}>
                            <PlainInput
                                onChangeText={this._onChangeFilterText}
                                placeholder="Search..."
                                value={this.state.filterText}/>
                            <PlainInput
                                onChangeText={this._onChangeScrollToIndex}
                                placeholder="scrollToIndex..."/>
                        </View>
                        <View style={exampleStyles.options}>
                            {renderSmallSwitchOption(this, 'virtualized')}
                            {renderSmallSwitchOption(this, 'horizontal')}
                            {renderSmallSwitchOption(this, 'fixedHeight')}
                            {renderSmallSwitchOption(this, 'logViewable')}
                            {renderSmallSwitchOption(this, 'debug')}
                            <Spindicator value={this._scrollPos}/>
                        </View>
                    </View>
                    <SeparatorComponent />
                    <AnimatedFlatList
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        ListHeaderComponent={HeaderComponent}
                        ListFooterComponent={FooterComponent}
                        data={filteredData}
                        debug={this.state.debug}
                        disableVirtualization={!this.state.virtualized}
                        getItemLayout={this.state.fixedHeight ?
                            this._getItemLayout :
                            undefined
                        }
                        horizontal={this.state.horizontal}
                        key={(this.state.horizontal ? 'h' : 'v') +
                        (this.state.fixedHeight ? 'f' : 'd')
                        }
                        keyboardShouldPersistTaps="always"
                        keyboardDismissMode="on-drag"
                        legacyImplementation={false}
                        numColumns={1}
                        onEndReached={this._onEndReached}
                        onRefresh={this._onRefresh}
                        onScroll={this.state.horizontal ? this._scrollSinkX : this._scrollSinkY}
                        onViewableItemsChanged={this._onViewableItemsChanged}
                        ref={this._captureRef}
                        refreshing={false}
                        renderItem={this._renderItemComponent}
                        contentContainerStyle={exampleStyles.list}
                        viewabilityConfig={VIEWABILITY_CONFIG}/>
                </View>
            </RNTesterPage>
        );
    }

    _captureRef = (ref) => {
        this._listRef = ref;
    };
    _getItemLayout = (data: any, index: number) => {
        return getItemLayout(data, index, this.state.horizontal);
    };
    _onEndReached = () => {
        if (this.state.data.length >= 1000) {
            return;
        }
        this.setState((state) => ({
            data: state.data.concat(genItemData(100, state.data.length)),
        }));
    };
    _onRefresh = () => alert('onRefresh: nothing to refresh :P');
    _renderItemComponent = ({item, separators}) => {
        return (
            <ItemComponent
                item={item}
                horizontal={this.state.horizontal}
                fixedHeight={this.state.fixedHeight}
                onPress={this._pressItem}
                // onShowUnderlay={separators.highlight}
                // onHideUnderlay={separators.unhighlight}
            />
        );
    };
    // This is called when items change viewability by scrolling into or out of
    // the viewable area.
    _onViewableItemsChanged = (info: {
        changed: Array<{
            key: string,
            isViewable: boolean,
            item: any,
            index: ?number,
            section?: any,
        }>
    }) => {
        // Impressions can be logged here
        if (this.state.logViewable) {
            infoLog(
                'onViewableItemsChanged: ',
                info.changed.map((v) => ({...v, item: '...'})),
            );
        }
    };
    _pressItem = (key: string) => {
        this._listRef.getNode().recordInteraction();
        pressItem(this, key);
    };
    _listRef: AnimatedFlatList;
}


const exampleStyles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(239, 239, 244)',
        flex: 1,
    },
    list: {
        backgroundColor: 'white',
    },
    options: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    searchRow: {
        paddingHorizontal: 10,
    },
});

module.exports = {
    FlatListItem: FlatListItem,
    FlatListView: FlatListView,
    FlatListExample: FlatListExample
}