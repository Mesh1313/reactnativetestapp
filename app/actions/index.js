import {
    UPDATE_USER_CREDENTIALS,
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from './actions';
import {
    updateUserCredentials,
    getData,
    onGetDataSuccess,
    getStackoverflowQuestions
} from './actions';

export const ActionTypes = {
    UPDATE_USER_CREDENTIALS,
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
};

export const Actions = {
    updateUserCredentials,
    getData,
    onGetDataSuccess,
    getStackoverflowQuestions
};