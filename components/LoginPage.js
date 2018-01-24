import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

//sub components
import UserNameInput from './UserNameInputComponent'
import UserNamePassword from './UserPasswordInputComponent'
import { updateUserCredentials } from "../stateManagement/actions";

class LoginPage extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null
    };

    constructor(props) {
        super(props);
    }

    onPressLogin() {
        const { navigate } = this.props.navigation;

        if (
            !(this.state.username && this.state.username.length) ||
            !(this.state.password && this.state.password.length)
        ) return;
        
        this.props.dispatch(updateUserCredentials({
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

                <UserNameInput setUserName={this.setName.bind(this)}/>

                <UserNamePassword setUserPassword={this.setPassword.bind(this)}/>

                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={this.onPressLogin.bind(this)}
                >
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(LoginPage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 30,
        fontSize: 30
    },
    icons: {
        fontSize: 20,
        marginRight: 10,
        textAlign: 'left',
        color: 'black'
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 150,
        marginBottom: 20,
        padding: 0,
        paddingHorizontal: 10
    },
    inputHolder: {
        flexWrap: 'wrap',
        alignItems: 'stretch',
        flexDirection: 'row'
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