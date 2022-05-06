/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  Platform,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Share from 'react-native-share';

import images from './images/imagesBase64';
import pdfBase64 from './images/pdfBase64';
import * as Progress from 'react-native-progress';
import PanResponderScreen from './src/screen/PanResponder';

const App = () => {
  return (
    <View style={styles.container}>
      <PanResponderScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
