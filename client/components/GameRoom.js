import React, {Component} from 'react';
import { StyleSheet, Text, View, PanResponder, Animated, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import io from 'socket.io-client/dist/socket.io'
import Orientation from 'react-native-orientation';
import Draggable from './Draggable'
import userAvatar from '../../public/img/userAvatar.png'
import chopsticks from '../../public/img/cardViews/chopsticks.png'
import pudding from '../../public/img/cardViews/pudding.png';

export default class GameRoom extends Component {

  
  constructor(){
    super()
    this.state = {
      hand: [pudding, chopsticks, pudding, chopsticks, pudding, chopsticks, pudding],
      selectedCard: ''
    }

    this.socket = io('http://localhost:3000')
    this.socket.on('connection', () => console.log('connected'))
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
          this.state.hand.map((image) => {
            idx++
            return (
              <View key={idx} style={{}}>
                <TouchableOpacity style={{height:75, width:40, margin:5}} onPress={() => this.handleSelect.call(this, image)}>
                  <Image source={image} style={{height:75, width:40, margin:5}}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
       </View>
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex'
  },
  ballContainer: {
    height:200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});
