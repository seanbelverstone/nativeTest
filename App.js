import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from "./components/HelloWorld";
import LotsOfGreetings from "./components/Greeting";
import BlinkApp from "./components/Blink";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <HelloWorld />
      <LotsOfGreetings />
      <BlinkApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
