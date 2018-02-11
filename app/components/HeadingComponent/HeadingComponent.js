import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class HeadingComponent extends Component {
    constructor(props) {
        super(props);

        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.props.navigation && this.props.navigation.navigate("DrawerOpen");
    }

    render() {
        return (
            <View style={ [styles.heading, { marginBottom: (this.props.overrideMarginBottomZero ? 0 : 100) }] }>
                <TouchableOpacity style={ styles.barsIcon } onPress={ this.openDrawer }>
                    <Text>
                        <Icon name="bars" size={24}/>
                    </Text>
                </TouchableOpacity>
                <Text style={ styles.headingText }>
                    { this.props.text }
                </Text>
            </View>
        );
    }
}