import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store, { playCard, getCurrentUser } from '../store/users'

export default class HowToPlay extends Component {
  constructor() {
    super()
    this.state = store.getState();

    this.getCurrentUser = this.getCurrentUser.bind(this);
  }
  componentDidMount() {
    console.log('component mounted')
    this.unsubscribe = store.subscribe(() => {
      console.log('hello world!!')
      this.setState(store.getState())

    })
    { this.getCurrentUser('666') }
  }
  componentWillReceiveProps(nextProps) {
    console.log('proppppppppps', nextProps);
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  getCurrentUser(socketId) {
    store.dispatch(getCurrentUser(socketId))
  }

  render() {
    console.log('rendering');
    return (
      <View style={styles.container}>

        {console.log('UPDATEDD ----------------', this.state)}
        <Text>This is my HowToPlay Component!</Text>
        {/* <Text>{console.log(this.getCurrentUser('666'))}</Text> */}
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