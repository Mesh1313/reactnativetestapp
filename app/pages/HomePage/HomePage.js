import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import HeadingComponent from '../../components/HeadingComponent/index';
import styles from './styles';

class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadingComponent navigation={this.props.navigation} text="Home"/>
                <Text style={styles.title}>Hello, {this.props.username}</Text>
            </View>
        );
    }
}

export default connect((state) => {
    return {
        username: state.userReducer.username
    }
}, null)(HomePage);