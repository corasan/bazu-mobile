/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight} from 'react-native';
import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');

class bazu_mobile extends Component {
    login = () => {
        console.log('pressed');
        ref.authWithPassword({
            email    : "henrypl360@gmail.com",
            password : "123456"
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={this.login.bind(this)}><Text>Login!</Text></TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
      height: 50,
      width: 100,
      backgroundColor: 'blue'
  }
});

AppRegistry.registerComponent('bazu_mobile', () => bazu_mobile);
