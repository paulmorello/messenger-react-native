import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class MainChat extends Component {

  static navigationOptions = {
    title: "Group Chat",
    headerStyle: {
      backgroundColor: "rgba(53, 183, 41, 0.65)",
    },
    headerTintColor: "white",
  }
  
  render() {
    return (
      <View
        key="MainChat"
        style={{ flex: 1 }}>

        <TextInput
          placeholder="Aa"
          spellcheck={ false }
          />

      </View>
    )
  }
}

export default MainChat;
