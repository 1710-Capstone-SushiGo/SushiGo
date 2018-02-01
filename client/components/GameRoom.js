import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { playCard, getCurrentUser } from '../store';
import {connect} from 'react-redux';
import io from 'socket.io-client/dist/socket.io'
import Orientation from 'react-native-orientation';
import Draggable from './Draggable'
import userAvatar from '../../public/img/userAvatar.png'

class GameRoom extends Component {

  
  constructor(){
    super()
    this.state = {images: {
      chopsticks: '../../public/img/cardViews/chopsticks.png',
      dumpling: '../../public/img/cardViews/dumpling.png',
      egg: '../../public/img/cardViews/egg.png',
      maki1: '../../public/img/cardViews/maki1.png',
      maki2: '../../public/img/cardViews/maki2.png',
      maki3: '../../public/img/cardViews/maki3.png',
      pudding: '../../public/img/cardViews/pudding.png',
      salmon: '../../public/img/cardViews/salmon.png',
      sashimi: '../../public/img/cardViews/sashimi.png',
      squid: '../../public/img/cardViews/squid.png',
      tempura: '../../public/img/cardViews/tempura.png',
      wasabi: '../../public/img/cardViews/wasabi.png',
    }}

    this.socket = io('http://localhost:3000')
    this.socket.on('connection', () => console.log('connected'))
  }

  componentDidMount() {
    this.props.getCurrentUserDispatch('666')
  }

  handleSelect = async (image) => {
    await this.setState({selectedCard: image})
  }
  
  render() {
    let idx = 0
    return (
      <View style={{height:'100%', flexDirection: 'column', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#213F99'}}>
        
        <View style={{flexDirection:'row', justifyContent: 'space-between',width:'40%'}}>
          <Image source={userAvatar} style={{height:50, width:50, margin:10}} />
          <Image source={userAvatar} style={{height:50, width:50, margin:10}} />
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between',width:'90%'}}>
          <Image source={userAvatar} style={{height:50, width:50, margin:10}} />
          <Image source={userAvatar} style={{height:50, width:50, margin:10}} />
        </View>
       <View style={{flexDirection: 'row', margin: 5}}>
        {
          this.props.currentUser.hand && this.props.currentUser.hand.map((image) => {
            idx++
            return (
              <View key={idx} style={{}}>
              {console.log(this.state.images[image])}
                <TouchableOpacity style={{height:75, width:40, margin:5}} onPress={() => this.handleSelect.call(this, image)}>
                  <Image source={require(`${this.state.images[image]}`)} style={{height:75, width:40, margin:5}}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
        <Button 
          onPress={() => {
            this.props.playCardDispatch('666', this.state.selectedCard)
          }}
          title="Play Card"
        />
       </View>
      </View>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.all,
    currentUser: state.users.current
  }
}

const mapDispatch = dispatch => {
  return ({
    getCurrentUserDispatch(socketId) {
      dispatch(getCurrentUser(socketId))
    },
    playCardDispatch(socketId, card) {
      dispatch(playCard(socketId, card))
    }
  })
}


export default connect(mapState, mapDispatch)(GameRoom);

