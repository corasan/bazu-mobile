import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');

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
        }).then(error => {
            console.log("Route");
            nav.push({
                name: 'contacts'
            });
        });
    }
}
