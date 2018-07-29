import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

// File Imports
import MessageCard from './MessageCard';

// Styles
const styles = StyleSheet.create({
  list: {
    backgroundColor: '#F3F3F3'
  }
});

class Messages extends Component {
  state = {
    messages: []
  }

  componentDidMount() {

    const messages = require('./messages.json').messages

    this.setState({ messages })

  }

  render() {

    return [
      <FlatList
        key="flatlist"
        data={this.state.messages}
        style={styles.list}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => (
          <MessageCard
            event={item}
          />
        )}
      />
    ]
  }
}

export default Messages;
