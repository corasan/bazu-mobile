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
    TouchableHighlight,Navigator} from 'react-native';
import Login from './src/components/Auth/Login';
import Contacts from './src/components/Contacts/Contacts';

class bazu_mobile extends Component {
    renderScene(route, navigator) {
        switch(route.name) {
            case 'contacts':
                return (<Contacts/>)
            case 'login':
                return (<Login navigator={navigator}/>)
        }
    }
    render() {
        return (
                <Navigator
                    style={styles.titlebar}
                    initialRoute={{name: 'login', index: 0}}
                    renderScene={this.renderScene}
                />
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
    }

});

AppRegistry.registerComponent('bazu_mobile', () => bazu_mobile);
