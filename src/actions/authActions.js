import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');
import { fetchContacts } from './contactsActions';
import contactStore from '../reducers/contactsReducer';

export function authUser(email, password, nav) {
    return function(dispatch) {
        ref.authWithPassword({
            email: email,
            password: password
        }).then(data => {
            console.log("Authenticated successfully with payload:", data);
            dispatch({
                type: 'LOGIN',
                uid: data.uid,
            });
        }).then(() => {
            console.log("Route");
            nav.push({
                name: 'contacts'
            });
        }).then(() => {
            let user = ref.getAuth();
            let arr = contactStore.getState();
            contactStore.dispatch(fetchContacts(user.uid, arr));
        })
    }
}
