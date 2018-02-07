import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import HeadingComponent from '../../components/HeadingComponent/index';
import styles from './styles';

export default class LogoutPage extends Component {

    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }
    
    onLogout() {
        const { navigate } = this.props.navigation;

        navigate('Login');
    }

    render() {
        return (
            <View style={ styles.container }>
                <HeadingComponent navigation={ this.props.navigation } text="Log Out"/>

                <Text style={ styles.title }>Good Buy</Text>

                <TouchableOpacity
                    style={ styles.loginBtn }
                    onPress={ this.onLogout }
                >
                    <Text style={ styles.btnText }>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}