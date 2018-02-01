import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { playCard, getCurrentUser } from '../store';
import {connect} from 'react-redux';
import io from 'socket.io-client/dist/socket.io'
import Orientation from 'react-native-orientation';
import Draggable from './Draggable'
import userAvatar from '../../public/img/userAvatar.png';
import chopsticks from '../../public/img/cardViews/chopsticks.png';
import dumpling from '../../public/img/cardViews/dumpling.png';
import egg from '../../public/img/cardViews/egg.png';
import makiOne from '../../public/img/cardViews/maki1.png';
import makiTwo from '../../public/img/cardViews/maki2.png';
import makiThree from '../../public/img/cardViews/maki3.png';
import pudding from '../../public/img/cardViews/pudding.png';
import salmon from '../../public/img/cardViews/salmon.png';
import sashimi from '../../public/img/cardViews/sashimi.png';
import squid from '../../public/img/cardViews/squid.png';
import tempura from '../../public/img/cardViews/tempura.png';
import wasabi from '../../public/img/cardViews/wasabi.png';

class GameRoom extends Component {

  
  constructor(){
    super()
    this.state = {images: {
      chopsticks,
      dumpling,
      egg,
      makiOne,
      makiTwo,
      makiThree,
      pudding,
      salmon,
      sashimi,
      squid,
      tempura,
      wasabi
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
            idx++;
            return (
              <View key={idx} style={{}}>
                <TouchableOpacity style={{height:75, width:40, margin:5}} onPress={() => this.handleSelect.call(this, image)}>
                  <Image source={this.state.images[image]} style={{height:75, width:40, margin:5}}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
        <Button 
          onPress={() => {
            this.props.playCardDispatch('666', this.state.selectedCard)
            this.setState({selectedCard: ''})
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

