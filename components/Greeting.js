import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	sean: {
		color: "red",
		fontSize: 24
	},
	moss: {
		color: "green",
		fontSize: 22
	},
	dan: {
		color: "blue",
		fontSize: 26
	}
})

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={this.props.style}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
	render() {
	  return (
		<View style={{alignItems: 'center', top: 50}}>
		  <Greeting name='Sean' style={styles.sean}/>
		  <Greeting name='Moss' style={styles.moss}/>
		  <Greeting name='Dan' style={styles.dan}/>
		</View>
	  );
	}
  }
  