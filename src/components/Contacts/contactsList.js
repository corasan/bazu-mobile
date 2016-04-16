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
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            dataSource: ds.cloneWithRows(props.contacts)
        }
    }

    renderRow = (contact) => {
        return(
            <View style={styles.el}>
                <Text style={styles.text}>{contact.name}</Text>
            </View>
        )
    }

    render() {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />

        )
    }
}

const styles = StyleSheet.create({
    el: {
        padding: 5,
    },
    text: {
        fontSize: 16
    }
});
