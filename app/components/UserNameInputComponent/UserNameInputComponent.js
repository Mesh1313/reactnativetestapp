import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class userNameInputComponent extends Component {
    setUserName(value) {
        this.props.setUserName(value);
    }
    
    render() {
        return (
            <View style={styles.inputHolder}>
                <Text style={styles.icons}>
                    <Icon name="user" size={24}/>
                </Text>
                <TextInput
                    name="username"
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
                    placeholder="username"
                    onChangeText={(value) => {this.setUserName(value)}}
                />
            </View>
        );
    }
}