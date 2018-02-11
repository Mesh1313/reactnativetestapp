import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import styles from './styles';

export default class QuestionsListViewComponent extends Component {
    constructor(props) {
        super(props);
    }

    isEven(index) {
        return index%2 === 0;
    }

    render() {
        return (
            <ScrollView>
                {
                    this.props.questions.map((item, index) => (
                        <View key={index} style={ this.isEven(index) ? [styles.item, styles.itemEven] : styles.item }>
                            <Text style={styles.itemText}>
                                {item.title}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        );
    }
}