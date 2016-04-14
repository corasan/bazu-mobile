import { createStore, applyMiddleware } from 'redux';

const defaultState = {
    items: [
        {name: 'Henry'},
        {name: 'Paulino'}
    ]
};

contactsStore = (state=defaultState, action) => {
    switch(action.type) {
        case 'FETCH_CONTACTS':
            return Object.assign({}, state, {
                items: state.items.concat([{
                    name: action.name
                }])
            });
        default:
            return state;
    }
}

export default createStore(contactsStore);
