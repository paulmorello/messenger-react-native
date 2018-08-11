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
import Register from './Register';

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: MainChat },
  Register: { screen: Register }
});
