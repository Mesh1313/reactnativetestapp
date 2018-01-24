import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import Router from './router';
import configureStore from './stateManagement/store.js'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.store = configureStore();
    }
    render() {
        return (
            <Provider store={this.store}>
                <Router/>
            </Provider>
        );
    }
}
