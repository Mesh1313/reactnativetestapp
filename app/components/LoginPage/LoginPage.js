import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';

//sub components
import UserNameInputComponent from '../UserNameInputComponent';
import UserPasswordInputComponent from '../UserPasswordInputComponent'
import { Actions } from "../../actions";

class LoginPage extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null
    };

    constructor(props) {
        super(props);

        this.onPressLogin = this.onPressLogin.bind(this);
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    onPressLogin() {
        const { navigate } = this.props.navigation;

        if (
            !(this.state.username && this.state.username.length) ||
            !(this.state.password && this.state.password.length)
        ) return;
        
        this.props.dispatch(Actions.updateUserCredentials({
            username: this.state.username,
            password: this.state.password
        }));

        navigate('Home');
    }

    setName(name) {
        this.setState({username: name});
    }

    setPassword(password) {
        this.setState({password: password});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome</Text>

                <UserNameInputComponent setUserName={ this.setName }/>

                <UserPasswordInputComponent setUserPassword={ this.setPassword }/>

                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={ this.onPressLogin }
                >
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(LoginPage)