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
// import store from '../../store/configStore';
import store from '../../reducers/contactsReducer'

export default class Contacts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arr: store.getState()
        }
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <ContactsList contacts={this.state.arr}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center'
    }
})
