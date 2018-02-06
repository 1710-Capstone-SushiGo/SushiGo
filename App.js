// import { StackNavigator } from 'react-navigation'
// import StartMenu from './client/components/StartMenu'
// import JoinGame from './client/components/JoinGame'
// import CreateGame from './client/components/CreateGame'
// import HowToPlay from './client/components/HowToPlay'
// import Lobby from './client/components/Lobby'
// import OnLoad from './client/components/OnLoad'
// import GameRoom from './client/components/GameRoom'

// export default RootNavigator = StackNavigator({
//   Main: {
//     screen: OnLoad
//   },
//   StartMenu: {
//     screen: StartMenu,
//     navigationOptions: {
//       headerTitle: 'Sushi Go!',
//     }
//   },
//   JoinGame: {
//     screen: JoinGame,
//     navigationOptions: {
//       headerTitle: 'Join Game'
//     }
//   },
//   CreateGame: {
//     screen: CreateGame,
//     navigationOptions: {
//       headerTitle: 'Create Game'
//     }
//   },
//   HowToPlay: {
//     screen: HowToPlay,
//     navigationOptions: {
//       headerTitle: 'How To Play'
//     }
//   },
//   Lobby: {
//     screen: Lobby,
//     navigationOptions: {
//       headerTitle: 'Lobby'
//     }
//   }
//   ,
//   GameRoom: {
//     screen: GameRoom,
//     navigationOptions: {
//       headerTitle: 'Game Room'
//     }
//   }
// });

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Index from './client/index';
import store from './client/store/index';
// import { AppRegistry } from 'react-native';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
console.disableYellowBox = true;

export default App
// AppRegistry.registerComponent('App', () => App)