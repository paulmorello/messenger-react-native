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
    title: "Register Account",
    headerStyle: {
      display: 'none',
    },
    headerTintColor: "white",
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
    }
  }

  cancelRegister = () => {
    Alert.alert('Registration Cancelled');
    this.props.navigation.navigate('Home');
  }

  registerAccount = () => {
    if ( !this.state.username ) {
      Alert.alert('Please enter a username')
    }
    else if ( this.state.password !== this.state.passwordConfirm ) {
      Alert.alert('Passwords do not match')
    }
    else {
      AsyncStorage.getItem(this.state.username, (err, result) => {
        if (result !== null) {
          Alert.alert(`${this.state.username} already exists`);
        }
        else {
          AsyncStorage.setItem(this.state.username, this.state.password, (err,result) => {
            Alert.alert(`${this.state.username} account created`);
            this.props.navigation.navigate('Home')
          })
        }
      })
    }
  }

  render() {
    return (
      <View
        key="Register"
        style={styles.container}>

        <View>
          <View styles={styles.headerContainer}>
            <Text style={styles.header}>Register Account</Text>
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

          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            onChangeText={(text) => this.setState({passwordConfirm: text})}
            value={this.state.passwordConfirm}
            secureTextEntry={true}
          />

        </View>

          <TouchableOpacity
            onPress={ this.registerAccount }
            style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ this.cancelRegister }
            style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default Register;
