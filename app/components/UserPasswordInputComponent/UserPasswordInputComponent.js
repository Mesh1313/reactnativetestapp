import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class UserPasswordInputComponent extends Component {
    setUserPassword(value) {
        this.props.setUserPassword(value);
    }

    render() {
        return (
            <View style={styles.inputHolder}>
                <Text style={styles.icons}>
                    <Icon name="lock" size={24}/>
                </Text>
                <TextInput
                    name="password"
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
                    placeholder="password"
                    secureTextEntry
                    onChangeText={(value) => {this.setUserPassword(value)}}
                />
            </View>
        );
    }
}