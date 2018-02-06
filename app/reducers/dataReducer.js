import { ActionTypes } from '../actions';

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case ActionTypes.FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case ActionTypes.FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}