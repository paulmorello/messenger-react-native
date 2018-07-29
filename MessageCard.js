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
    height: 50,
    width: 375,
    borderTopColor: "lightgrey",
    borderTopWidth: .3,
    borderBottomColor: "lightgrey",
    borderBottomWidth: .3
  },
  cardText: {
    paddingTop: 16,
    paddingLeft: 10,
    textAlign: 'left',
    fontWeight: "normal",
    color: "black"
  }
});

export default function MessageCard({ event }) {

  return (
    <View style={ styles.cardContainer }>
      <Text style={ styles.cardText }> {event.firstname}: {event.message} </Text>
    </View>
  )
}
