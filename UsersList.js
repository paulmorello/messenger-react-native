import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

// File Imports
import UserCard from './UserCard.js';

// Styles
const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F3F3F3'
  },
});

class UsersList extends Component {
  state = {
    users: []
  }

  componentDidMount() {

    const users = require('./users.json').users

    this.setState({ users })

  }

  render() {

    return [
      <FlatList
        key="flatlist"
        data={this.state.users}
        style={styles.list}
        keyExtractor={ item => item.id }
        horizontal={true}
        renderItem={ ({item}) => (
          <UserCard
            event={item}
          />
        )}
      />
    ]
  }
}

export default UsersList;
