import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {connect} from 'react-redux';
import io from 'socket.io-client/dist/socket.io'
import userAvatar from '../../public/img/userAvatar.png';
import { Font } from 'expo';

/*
client will receive if others join lobby
*/
class Lobby extends Component {

  static navigationOptions = {
    header: null
}

  constructor(props){
    super(props)
    this.state = {
      isFontLoaded: false,
      users: []
    }
    //http://172.16.23.137:3000
    //http://192.168.1.30:3000
    this.socket = io('http://172.16.23.137:6000')
    this.socket.on('connect', () => this.socket.emit('room','test', props.navigation.state.params))
    if(props.navigation.state.params.creator) {
      this.socket.on('receiveUser', (newUser) => {
        if(props.navigation.state.params.id !== newUser.id) this.setState({users: this.state.users.concat([newUser])})
        this.socket.emit('updatedUsers', 'test', this.state.users)
      })
    }
    this.socket.on('gameStart', (users) => {
      props.navigation.navigate('GameRoom', {userId: props.navigation.state.params.id, users, socket:this.socket})
    })
    this.socket.on('newUsers', (newUsers) => this.setState({users: newUsers}))

  }

  componentDidMount() {
    Font.loadAsync({
      'Baloo-Regular': require('../../assets/font/Baloo-Regular.ttf')
  }).then(()=>{
      this.setState({
          isFontLoaded: true
      })
  })
    
    this.setState({users: [this.props.navigation.state.params]})
  }

  render(){
    let currentUser = this.props.navigation.state.params
    return(
      <View style={styles.container}>
        <View style={{width: '100%', flexDirection:'row', justifyContent: 'center'}}>
        {
          this.state.users.map((user,idx) =>
            <View key={idx} style={{justifyContent: 'center'}}>
              <Image source={userAvatar} style={{height:50, width:50}}/>
              <Text style={{justifyContent: 'center', fontFamily: 'Baloo-Regular', fontSize: 16, color: 'white', marginLeft: 10, top: 10}}>{user.name}</Text>
            </View>
          )
        }
        </View>
        <Text
            style={{fontFamily: 'Baloo-Regular', fontSize: 35, color:'#FFDD17', top: 30}}
            onPress={() => {
              this.socket.emit('readyStart', 'test', this.state.users)
            }}
            disabled={!currentUser.creator}
            >Start Game</Text>
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
    backgroundColor: '#213F99',
    justifyContent: 'center'
  }
})

export default connect(mapState, mapDispatch)(Lobby);