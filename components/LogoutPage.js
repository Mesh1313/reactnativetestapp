import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import HeadingComponent from './HeadingComponent';

export default class LogoutPage extends Component {
    
    onLogout() {
        const { navigate } = this.props.navigation;

        navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadingComponent navigation={this.props.navigation} text="Log Out"/>

                <Text style={styles.title}>Good Buy</Text>

                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={this.onLogout.bind(this)}
                >
                    <Text style={styles.btnText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        marginBottom: 30,
        fontSize: 30
    },
    loginBtn: {
        paddingVertical: 10,
        backgroundColor: '#EEE',
        width: 100
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center'
    }
});