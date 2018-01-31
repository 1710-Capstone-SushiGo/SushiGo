import React, {Component} from 'react';
import { StyleSheet, Text, View, PanResponder, Animated, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import pudding from '../../public/img/cards/pudding.png';
import io from 'socket.io-client/dist/socket.io'
import Orientation from 'react-native-orientation';
import Draggable from './Draggable'
import dumpling from '../../public/img/cards/dumpling.png'

export default class GameRoom extends Component {
  constructor(){
    super()

    this.state = {
      imageArray: [pudding, dumpling]
    }
    this.socket = io('http://localhost:3000')
    this.socket.on('connection', () => console.log('connected'))

  }
  render() {
    let idx = 0
    return (
      <View>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        {this.state.imageArray.map(elem => {
          idx++
          return (
            <View key={idx} style={styles.row}>
              {<Draggable img={elem} socket={this.socket}/>}
            </View>
          )
        })}
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