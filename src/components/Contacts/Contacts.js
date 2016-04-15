import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ListView
} from 'react-native';
import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');
import ContactsList from './contactsList';

export default class Contacts extends Component{
    constructor(props) {
        let user = ref.getAuth();
        super(props);
        this.state = {
            contacts: ref.child(user.uid).once('value').then(function(dataSnap) {
                return dataSnap.val();
            }).then(function(data) {
                let arr = [];
                for(let i in data) {
                    arr.push({ name: data[i].name });
                }
                return arr;
            })
        }
    }

    // getData() {
    //     let user = ref.getAuth();
    //     ref.child(user.uid).once('value').then(function(dataSnap) {
    //         return dataSnap.val();
    //     }).then(function(data) {
    //         let arr = [];
    //         for(let i in data) {
    //             arr.push({ name: data[i].name });
    //         }
    //         return arr;
    //     });
    // }

    render() {
        return (
            <View style={styles.container}>
                <ContactsList contacts={this.state.contacts}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 20
    }
})

// test = () => {
//     let user = ref.getAuth();
//     ref.child(user.uid).on('value').then(function(dataSnap) {
//         return dataSnap.val();
//     });
// }
//
// render() {
//     return (
//         <View style={styles.container}>
//             <ContactsList contacts={this.test}/>
//         </View>
//     )
// }
