import settings from '../config/settings';

export const UPDATE_USER_CREDENTIALS = 'USER_NAME_INPUT';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export function updateUserCredentials(credentials) {
    return {
        type: UPDATE_USER_CREDENTIALS,
        ...credentials
    }
}

export function getData() {
    return {
        type: FETCHING_DATA
    }
}

export function onGetDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export function getStackoverflowQuestions(onGetDataCallback, onSuccessCallback) {
    return (dispatch) => {
        dispatch(onGetDataCallback());
        fetch(settings.getReactNativeQuestionsUrl)
            .then(response => response.json())
            .then(function(response) {
                dispatch(onSuccessCallback(response.items));
            });
    }
}
