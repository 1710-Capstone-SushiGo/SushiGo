import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store, {keepCard} from '../Store/users'

export default class HowToPlay extends Component {
  constructor(){
    super()
    this.state = store.getState();

    this.getKeepCard = this.getKeepCard.bind(this);
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  getKeepCard(card){
    const action = keepCard(card)
      store.dispatch(action)
  }
  
  render(){
    console.log(this.state)
    return (
      <View style={styles.container}>
      {this.getKeepCard('eggNigri')}
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