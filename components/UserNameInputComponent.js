import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class userNameInput extends Component {
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