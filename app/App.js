import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './config/router';
import configureStore from './store/index'

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
