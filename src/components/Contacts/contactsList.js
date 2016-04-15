import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ListView
} from 'react-native';
import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/contacts');
import ListItem from './listItem';

// function getData(user) {
//     ref.child('contacts').child(user.uid).once('value').then(function(dataSnap) {
//         return dataSnap.val();
//     }).then(function(data) {
//         let arr = [];
//         for(let i in data) {
//             arr.push({ name: data[i].name });
//         }
//         console.log(arr)
//         return arr;
//     });
// }
export default class ContactsList extends Component {
    constructor(props) {
        super(props);
        let user = ref.getAuth();
        // let data = getData(user);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows()
        }
    }

    componentWillMount() {
        ref.child(user.uid).once('value').then(function(dataSnap) {
            return dataSnap.val();
        }).then(function(data) {
            let arr = [];
            for(let i in data) {
                arr.push({ name: data[i].name });
            }
            console.log(arr)
            this.setState({dataSource: arr});
        }.bind(this))
    }

    renderRow = (contact) => {
        return (
            <Text>{contact.name}</Text>
        )
    }

    render() {
        return(
            <View>
                <ListView dataSource={this.state.dataSource}
                renderRow={this.renderRow} />
            </View>
        )
    }
}



// {
//     "rules": {
//       "users": {
//         "$user_id": {
//           ".write": "$user_id === auth.uid"
//         }
//       },
//       "contacts": {
//         "$user_id": {
//           ".write": "$user_id === auth.uid"
//         }
//       },
//       "messages": {
//         "$user_id": {
//           ".write": "$user_id === auth.uid",
//           ".read": "$user_id === auth.uid"
//         }
//       }
//     }
// }
