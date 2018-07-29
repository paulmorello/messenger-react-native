import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// File Imports
import HomeScreen from './HomeScreen';
import MainChat from './MainChat';

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: MainChat }
});
