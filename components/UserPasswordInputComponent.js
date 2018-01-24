import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UserPasswordInput extends Component {
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

const styles = StyleSheet.create({
    icons: {
        fontSize: 20,
        marginRight: 10,
        textAlign: 'left',
        color: 'black'
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 170,
        marginBottom: 20,
        padding: 0,
        paddingHorizontal: 10
    },
    inputHolder: {
        flexWrap: 'wrap',
        alignItems: 'stretch',
        flexDirection: 'row'
    }
});