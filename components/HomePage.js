import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import HeadingComponent from './HeadingComponent';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        marginBottom: 30,
        fontSize: 30
    }
});