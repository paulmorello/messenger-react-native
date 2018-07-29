import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';

// Styles
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "rgba(0, 164, 212, 0.62)",
    borderRadius: 35,
    height: 60,
    width: 90,
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 10
  },
  cardText: {
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
    alignItems: 'center'
  }
});

export default function UserCard({ event }) {

  return (
    <View style={ styles.cardContainer }>
      <Text style={ styles.cardText }> {event.firstname} </Text>
      <Text style={ styles.cardText }> {event.lastname} </Text>
    </View>
  )
}
