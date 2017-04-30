/**
 * Created by：CaMnter
 */

import React, {Component} from 'react';
import {View, Text} from "react-native";


const URL = 'https://facebook.github.io/react-native/movies.json';

class FetchPromiseView extends Component {

    constructor() {
        super();
        this.state = {content: 'Waiting for the fetching'};
    }

    /**
     * fetch(...) = Promise
     */
    fetchGet() {
        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                this.setState({content: responseJson.title + "\n" + responseJson.description});
                return responseJson.movies;
            })
            .catch(error => {
                console.error(error);
            });
    }

    fetchPost() {
        fetch(
            URL,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstParam: 'save',
                    secondParam: 'you',
                })
            }
        );
    }


    render() {
        this.fetchGet();
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 16,
                    color: 'steelblue'
                }}>
                    {this.state.content}
                </Text>
            </View>
        );
    }

}

class FetchAsyncView extends Component {

    constructor() {
        super();
        this.state = {content: 'Waiting for the fetching'};
        this._this = this;
    }

    async fetchAsync() {
        try {
            let response = await fetch(URL);
            let responseJson = await response.json();
            let state = {content: responseJson.title + "\n" + responseJson.description};
            this.setState(state);
            return state;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        this.fetchAsync();
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 16,
                    color: 'steelblue'
                }}>
                    {this.state.content}
                </Text>
            </View>
        );
    }

}

const Networking = {
    FetchPromiseView: FetchPromiseView,
    FetchAsyncView: FetchAsyncView
};

module.exports = Networking;




