import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(53, 183, 41, 0.65)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    overflow: 'hidden',
    alignItems: 'center',
    width: 200,
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
    paddingLeft: 50
  }
})

class HomeScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      display: 'none'
    }
  };

  handleStartChat = () => {
    this.props.navigation.navigate('Chat');
  }

  render() {

    return (
      <View
        key="HomeScreen"
        style={styles.container}>

        <View>
          <TouchableOpacity
            onPress={ this.handleStartChat }
            style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Start a Chat</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default HomeScreen;
