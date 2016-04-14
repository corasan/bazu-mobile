import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight } from 'react-native';
import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');

export default class Login extends Component {
    login = () => {
        ref.authWithPassword({
            email    : "henrypl360@gmail.com",
            password : "123456"
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                this.props.navigator.push({
                    name: 'contacts'
                });
            }
        }.bind(this));
    }

    render() {
        return(
            <View style={styles.container}>
                <Text></Text>
                <TouchableHighlight style={styles.button} onPress={this.login}>
                    <Text style={styles.btnText}>Login!</Text>
                </TouchableHighlight>
            </View>
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
