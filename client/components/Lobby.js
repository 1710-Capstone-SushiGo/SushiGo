import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {connect} from 'react-redux';
import io from 'socket.io-client/dist/socket.io'

/*
client will receive if others join lobby
*/
class Lobby extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
    this.socket = io('http://172.16.23.137:3000')
    this.socket.on('connect', () => this.socket.emit('room','test', props.navigation.state.params))
    if(props.navigation.state.params.creator) {
      this.socket.on('receiveUser', (newUser) => {
        if(props.navigation.state.params.id !== newUser.id) this.setState({users: this.state.users.concat([newUser])})
        console.log('---- STATE USERS: ', this.state.users)
        this.socket.emit('updatedUsers', 'test', this.state.users)
      })
    }
    this.socket.on('newUsers', (newUsers) => this.setState({users: newUsers}))

  }

  componentDidMount() {
    this.setState({users: [this.props.navigation.state.params]})
  }

  render(){
    let currentUser = this.props.navigation.state.params
    console.log(currentUser.name, this.state.users)
    return(
      <View style={styles.container}>
        <Text>This is my Lobby Component!</Text>
        <Button
                onPress={() => this.props.navigation.navigate('GameRoom', currentUser, this.socket)}
                title="Start Game"
                disable={!currentUser.creator}
            />
      </View>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AAA',
    justifyContent: 'center'
  }
})

export default connect(mapState, mapDispatch)(Lobby);