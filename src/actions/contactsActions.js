import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/contacts');

export function fetchContacts(uid, array) {
    return (dispatch) => {
        ref.child(uid).on('value').then(dataSnapshot => {
            return dataSnapshot.val();
        }).then(data => {
            for(let i in data) {
                array.push({
                    name: data[i].name
                });
            }
            return array;
        }).then((arr) => {
            dispatch({
                type: 'FETCH_CONTACTS',
                arr
            });
            console.log('DISPACTH ARRAY!!', arr);
        });
    }
}
