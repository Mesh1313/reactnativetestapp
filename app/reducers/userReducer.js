import { ActionTypes } from '../actions';

const initialState = {
    username: '',
    password: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_USER_CREDENTIALS:
            return {
                ...state,
                username: action.username,
                password: action.password
            };
        default:
            return state
    }
};

export default userReducer;