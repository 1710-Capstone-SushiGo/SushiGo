import React, {Component} from 'react';
import { StyleSheet, Text, View, PanResponder, Animated, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import target from '../../public/img/target.png';
import SocketIOClient from 'socket.io-client';
import Orientation from 'react-native-orientation';
import Draggable from './Draggable'
// class Draggable extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showDraggable: true,
//       dropAreaValues: null,
//       pan: new Animated.ValueXY(),
//       opacity: new Animated.Value(1),
//       array: []
//     };
//     this.socket = SocketIOClient('http://localhost:3000')
//     this.socket.on('connection', () => console.log('connected'))
//   }

//   componentWillMount() {
//     this._val = { x:0, y:0 }
//     this.state.pan.addListener((value) => this._val = value);

//     this.panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: (e, gesture) => true,
//         onPanResponderGrant: (e, gesture) => {
//           this.state.pan.setOffset({
//             x: this._val.x,
//             y:this._val.y
//           })
//           this.state.pan.setValue({ x:0, y:0})
//         },
//         onPanResponderMove: Animated.event([ 
//           null, { dx: this.state.pan.x, dy: this.state.pan.y }
//         ]),
//         onPanResponderRelease: (e, gesture) => {
//           if (this.isDropArea(gesture)) {
//             console.log("ITEM IS DROPPED")
//             Animated.timing(this.state.opacity, {
//               toValue: 0,
//               duration: 1000
//             }).start(() =>
//               this.setState({
//                 showDraggable: false
//               })
//             );
//           } 
//         }
//       });
//   }

//   isDropArea(gesture) {
//     return gesture.moveY < 200;
//   }

//   render() {
//     return (
//       <View style={{ width: "20%", alignItems: "center" }}>
//         {this.renderDraggable()}
//       </View>
//     );
//   }

//   renderDraggable() {
//     const panStyle = {
//       transform: this.state.pan.getTranslateTransform()
//     }
//     if (this.state.showDraggable) {
//       return (
//         <View style={{ position: "absolute" }}>
//           <Animated.View {...this.panResponder.panHandlers} style={[panStyle, styles.circle, {opacity:this.state.opacity}]}>
//             <Image source={target}/>
//           </Animated.View>
//         </View>
//       );
//     }
//   }
// }


export default class GameRoom extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <Draggable />
        </View>
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
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