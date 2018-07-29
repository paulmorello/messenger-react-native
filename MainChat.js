import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';


// File Imports
import UsersList from './UsersList';
import Messages from './Messages';

// Styles
const styles = StyleSheet.create({
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10
  }
})


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

          <View>
            <Text> Users Online </Text>
          </View>

          <View>
            <UsersList />
          </View>

          <View>
            <Text> Messages </Text>
            <View>
              <Messages />
            </View>
          </View>

          <View>
            <TextInput
              style={ styles.text }
              placeholder="Start Writing"
              spellcheck={false}
            />
          </View>

      </View>
    )
  }
}

export default MainChat;
