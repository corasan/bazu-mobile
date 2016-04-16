import { createStore, applyMiddleware } from 'redux';
import s from '../initialState';

contactsStore = (state, action) => {
    switch(action.type) {
        case 'FETCH_CONTACTS':
            return Object.assign({}, state, {
                items: state.items.concat([{
                    name: action.name
                }])
            });
        default: return state || s.contacts;
    }
}

export default createStore(contactsStore);
