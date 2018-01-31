import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store, { playCard } from '../store/users'

export default class HowToPlay extends Component {
  constructor() {
    super()
    this.state = store.getState();

    this.playCard = this.playCard.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  playCard(card) {
    store.dispatch(playCard(card))
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        {this.playCard('maki1')}
        <Text>This is my HowToPlay Component!</Text>
        <Text>{console.log(this.state)}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AAA',
    justifyContent: 'center'
  }
})