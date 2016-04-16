import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import s from '../initialState';

authStore = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            }
        default: return state || s.auth
    }
}

export default createStore(authStore, applyMiddleware(thunk));
