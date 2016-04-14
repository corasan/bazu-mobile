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
        super(props);
        this.state = {
            contactsObj: {},
            contacts_arr: [],
            arr: [
                {name: 'Henry'},
                {name: 'Paulino'}
            ]
        }
    }
    componentWillMount() {
        let user = ref.getAuth();
        ref.child('contacts').child(user.uid).on('value', function(data) {
            this.setState({contactsObj: data.val()});
            this.list();
            console.log('this.state.arr:', this.state.arr);
        }.bind(this));
    }
    // thing = () => {
    //     console.log('contactsObj:', this.state.contactsObj);
    // }
    list() {
        let arr = [];
        let contacts = this.state.contactsObj;
        console.log('Contacts:', contacts);
        for(let i in contacts) {
            console.log('name:', contacts[i].name);
            this.state.arr.push({
                name: contacts[i].name,
                number: contacts[i].number
            });
        }
        console.log('The array:', this.state.arr);
        return arr;
        console.log(this.state.contacts_arr);
        this.setState({arr: arr});
    }
    render() {
        return (
            <View style={styles.container}>
                <ContactsList contacts={this.state.arr}/>
            </View>
            // <TouchableHighlight onPress={this.thing} style={{marginTop: 30}}>
            //     <Text>Press</Text>
            // </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 20
    }
})
