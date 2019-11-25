import React from 'react';
import LoginContainer from './src/containers/LoginScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <LoginContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
