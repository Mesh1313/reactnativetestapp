import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeadingComponent extends Component {

    constructor(props) {
        super(props);
    }

    openDrawer() {
        this.props.navigation && this.props.navigation.navigate("DrawerOpen");
    }

    render() {
        return (
            <View style={[styles.heading, { marginBottom: (this.props.overrideMarginBottomZero ? 0 : 100) }]}>
                <TouchableOpacity style={styles.barsIcon} onPress={this.openDrawer.bind(this)}>
                    <Text>
                        <Icon name="bars" size={24}/>
                    </Text>
                </TouchableOpacity>
                <Text style={styles.headingText}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        alignSelf: 'stretch'
    },
    headingText: {
        textAlign: 'center',
        fontSize: 24
    },
    barsIcon: {
        position: 'absolute',
        left: 8,
        top: 8,
        zIndex: 2
    }
});