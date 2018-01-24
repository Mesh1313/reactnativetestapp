import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class QuestionsListViewConponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                {
                    this.props.questions.map((item, index) => (
                        <View key={index} style={ (index%2 == 0) ? [styles.item, styles.itemEven] : styles.item }>
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

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    itemEven: {
        backgroundColor: '#EEE'
    },
    itemText: {
        fontSize: 20,
        color: '#000'
    }
});