import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from "./HelloWorld";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        dwa
        dwa
      </Text>
      <Text>Open up App.js to start working on your app!</Text>
      <HelloWorld />
    </View>
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
