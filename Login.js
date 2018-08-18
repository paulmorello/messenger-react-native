import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(53, 183, 41, 0.65)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    width: 375,
    marginTop: 30,
    marginBottom: 30
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: "bold",
    color: 'white',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 50
  },
  textInputContainer: {
    overflow: 'hidden',
    alignItems: 'center',
    width: 375,
    marginTop: 30,
    marginBottom: 30
  },
  textInput: {
    backgroundColor: "rgba(53, 183, 41, 0.67)",
    marginBottom: 10,
    width: 300,
    height: 50,
    paddingLeft: 10,
    borderRadius: 5
  },
  buttonContainer: {
    overflow: 'hidden',
    alignItems: 'center',
    width: 375,
    height: 50,
    marginBottom: 5,
    borderRadius: 15
  },
  buttonText: {
    textAlign: 'center',
    color: "rgba(53, 183, 41, 0.65)",
    fontWeight: "bold",
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 50,
    paddingLeft: 50,
    width: 200
  }
})


class Register extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  cancelLogin = () => {
    Alert.alert('Login Cancelled');
    this.props.navigation.navigate('Home')
  }

  loginUser = () => {
    if (!this.state.username) {
      Alert.alert('Please enter a username');
    }
    else if (!this.state.password) {
      Alert.alert('Please enter a password');
    }
    else {
      AsyncStorage.getItem('userLoggedIn', (err, result) => {

        if ( result !== 'none') {
          Alert.alert('Someone already logged on');
          this.props.navigation.navigate('Home');
        }
        else {

          AsyncStorage.getItem( this.state.username, (err, result) => {

            if (result !== null) {

              if ( result !== this.state.password ) {
                Alert.alert( 'Password incorrect' );
              }
              else {
                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                  Alert.alert(`${this.state.username} Logged in`);
                  this.props.navigation.navigate('Chat');
                })
              }

            }
            else {
              Alert.alert(`No account for ${this.state.username}`);
            }

          })

        }
      })
    }
  }

  render() {
    return(
      <View
        key="Login"
        style={styles.container}>

        <View>
          <View styles={styles.headerContainer}>
            <Text style={styles.header}>Log In</Text>
          </View>

        <View style={styles.textInputContainer}>

          <TextInput
            style={styles.textInput}
            placeholder="Enter your username"
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
          />

        </View>

          <TouchableOpacity
            onPress={ this.loginUser }
            style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ this.cancelLogin }
            style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

}

export default Register;
