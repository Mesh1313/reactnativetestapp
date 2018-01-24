import { UPDATE_USER_CREDENTIALS } from './actions'

const initialState = {
    username: '',
    password: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_CREDENTIALS:
            return {
                ...state,
                username: action.username,
                password: action.password
            };
        default:
            return state
    }
};

export default reducer;