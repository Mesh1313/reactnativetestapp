import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import HeadingComponent from '../../components/HeadingComponent/index';
import QuestionsListViewComponent from '../../components/QuestionsListViewComponent/index';
import styles from './styles';

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
                    this.props.questions.length > 0 && <QuestionsListViewComponent questions={this.props.questions}/>
                }
            </View>
        );
    }
}

function fetchData() {
    return Actions.getStackoverflowQuestions(Actions.getData, Actions.onGetDataSuccess);
}

export default connect(
    (state) => {
        return {
            questions: state.dataReducer.data,
            isFetching: state.dataReducer.isFetching
        }
    },
    (dispatch) => {
        return {
            fetchData: () => dispatch(fetchData())
        }
    }
)(StackoverflowPage);