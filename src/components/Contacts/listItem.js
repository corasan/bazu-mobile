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

export default class ContactsList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([props.contacts])
        }
        console.log('listItem.js - constructor:', this.props.contacts);
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
