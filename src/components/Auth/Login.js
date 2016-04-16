import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight } from 'react-native';
import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');
import store from '../../reducers/authReducer'
import { authUser } from '../../actions/authActions';

export default class Login extends Component {
    login = () => {
        store.dispatch(authUser(
            'henrypl360@gmail.com',
            '123456',
            this.props.navigator
        ));
    }

    render() {
        return(
            <View style={styles.container}>
                <Text></Text>
                <TouchableHighlight style={styles.button} onPress={this.login}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding:30
    },
    button: {
        height: 50,
        width: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555',
        borderRadius: 4,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    }
});
