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
    this.socket = io('http://192.168.1.30:3000')
    if(props.navigation.state.params.creator) {
      this.socket.on('receiveUser', (newUser) => {
        if(props.navigation.state.params.id !== newUser.id) this.setState({users: this.state.users.push(newUser)})
        this.socket.emit('updatedUsers', this.state.users)
      })
    }
    this.socket.emit('Joined', props.navigation.state.params)
    this.socket.on('newUsers', (newUsers) => this.setState({users: newUsers}))

  }

  componentDidMount() {
    this.setState({users: [this.props.navigation.state.params]})
  }

  render(){
    let currentUser = this.props.navigation.state.params
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