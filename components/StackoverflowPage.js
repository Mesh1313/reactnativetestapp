import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { getData, onGetDataSuccess } from '../stateManagement/actions';
import HeadingComponent from './HeadingComponent';
import QuestionsListViewConponent from './QuestionsListViewConponent';

class StackoverflowPage extends Component {

    constructor(props) {
        super(props);

        if (!this.props.questions || !this.props.questions.length) {
            this.props.fetchData();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadingComponent navigation={this.props.navigation} text="Stackoverflow" overrideMarginBottomZero="true"/>
                {
                    this.props.isFetching && <Text style={styles.loadingText}>Loading...</Text>
                }
                {
                    this.props.questions.length > 0 && <QuestionsListViewConponent questions={this.props.questions}/>
                }
            </View>
        );
    }
}

function fetchData() {
    return (dispatch) => {
        dispatch(getData());
        fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=react-native&site=stackoverflow')
            .then(response => response.json())
            .then(function(response) {
                dispatch(onGetDataSuccess(response.items));
            });
    }
}

export default connect((state) => {
    return {
        questions: state.dataReducer.data,
        isFetching: state.dataReducer.isFetching
    }
}, (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
})(StackoverflowPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        marginBottom: 30,
        fontSize: 30
    },
    loadingText: {
        fontSize: 30,
        paddingTop: 50,
        color: '#000'
    }
});