/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    ToastAndroid,
    View,
    StyleSheet, Text
} from 'react-native';

const STORAGE_KEY_SAVE = "@AsyncStorageView:save";

class AsyncStorageView extends Component {

    state = {
        storageContent: ''
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AsyncStorage.setItem(STORAGE_KEY_SAVE, 'Save you from anything')
            .then(() => {
                // success
                ToastAndroid.show('[Success]  [AsyncStorage]  [setItem]', ToastAndroid.SHORT);
            }, () => {
                // failure
                ToastAndroid.show('[Failure]  [AsyncStorage]  [setItem]', ToastAndroid.SHORT);
            })
    }

    render() {
        AsyncStorage.getItem(STORAGE_KEY_SAVE)
            .then(value => {
                // success
                this.setState({storageContent: value});
            }, error => {
                // failure
                this.setState({storageContent: ''});
            });
        return (
            <View style={style.container}>
                <Text style={style.text}>
                    {this.state.storageContent}
                </Text>
            </View>
        );
    }

}

let firstObject = {
    name: 'CaMnter-A',
    age: 22,
    sign: {save: 'Save'}
};

let firstDelta = {
    age: 23,
    sign: {save: 'Save you from anything'}
};

let secondObject = {
    name: 'CaMnter-B',
    age: 22,
    sign: {url: 'https://camnter.com'}
};

let secondDelta = {
    age: 23,
    sign: {url: ['https://camnter.com', 'https://gf404.com'], save: 'Save you from anything'}
};

let array = [['firstObject', JSON.stringify(firstObject)], ['secondObject', JSON.stringify(secondObject)]];
let mergeArray = [['firstObject', JSON.stringify(firstDelta)], ['secondObject', JSON.stringify(secondDelta)]];

class MultiStorageView extends Component {

    state = {
        storageContent: ''
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AsyncStorage.multiSet(array, error => {
            this.setState({
                storageContent: this.state.storageContent + '[AsyncStorage]  [multiSet]  [errors] ' + (error !== null ? '= ' + error.toString() : '') + '\n\n'
            });
            AsyncStorage.multiMerge(mergeArray, error => {
                this.setState({
                    storageContent: this.state.storageContent + '[AsyncStorage]  [multiMerge]  [errors] = ' + (error !== null ? '= ' + error.toString() : '') + '\n\n'
                });
                AsyncStorage.multiGet(['firstObject', 'secondObject'], (errors: ?Array<Error>, result: ?Array<Array<string>>) => {
                    this.setState({
                        storageContent: this.state.storageContent + '[AsyncStorage]  [multiGet]  \n\n'
                    });
                    result.map((result, index, store) => {
                        let key = store[index][0];
                        let val = store[index][1];
                        this.setState({
                            storageContent: this.state.storageContent + '[key] = ' + key + '\n'
                        });
                        this.setState({
                            storageContent: this.state.storageContent + '[val] = ' + val + '\n\n'
                        });
                    })
                })
            })
        })
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>
                    {this.state.storageContent}
                </Text>
            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#529CD6',
        fontSize: 16
    }
});

const examples = {
    pagerTitle: 'AsyncStorage examples',
    pagerBlocks: [
        {
            title: 'AsyncStorageView',
            description: 'Simple AsyncStorage example',
            render(): React.Component{
                return (
                    <AsyncStorageView/>
                );
            }
        },
        {
            title: 'MultiStorageView',
            description: 'Multi AsyncStorage example',
            render(): React.Component{
                return (
                    <MultiStorageView/>
                );
            }
        }
    ]
};

module.exports = {examples};