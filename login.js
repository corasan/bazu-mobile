import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight } from 'react-native';
import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');
import Example from './example';


export default class Login extends Component {
    login = () => {
        console.log('pressed');
        // ref.authWithPassword({
        //     email    : "henrypl360@gmail.com",
        //     password : "123456"
        // }, function(error, authData) {
        //     if (error) {
        //         console.log("Login Failed!", error);
        //     } else {
        //         console.log("Authenticated successfully with payload:", authData);
        //     }
        // }.bind(this));
        this.props.navigator.push({
            name: 'contacts'
        })
    }

    render() {
        return(
            <TouchableHighlight style={styles.button} onPress={this.login}>
                <Text style={styles.btnText}>Login!</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555',
        borderRadius: 4,
        marginTop: 50
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    }
});
