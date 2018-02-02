import { StackNavigator } from 'react-navigation'
import StartMenu from './components/StartMenu'
import JoinGame from './components/JoinGame'
import CreateGame from './components/CreateGame'
import HowToPlay from './components/HowToPlay'
import Lobby from './components/Lobby'
import OnLoad from './components/OnLoad'
import GameRoom from './components/GameRoom'
import {Login} from './components/auth-form'

export default RootNavigator = StackNavigator({
  Main: {
    screen: OnLoad
  },
  StartMenu: {
    screen: StartMenu,
    navigationOptions: {
      headerTitle: 'Sushi Go!',
    }
  },
  JoinGame: {
    screen: JoinGame,
    navigationOptions: {
      headerTitle: 'Join Game'
    }
  },
  CreateGame: {
    screen: CreateGame,
    navigationOptions: {
      headerTitle: 'Create Game'
    }
  },
  HowToPlay: {
    screen: HowToPlay,
    navigationOptions: {
      headerTitle: 'How To Play'
    }
  },
  Lobby: {
    screen: Lobby,
    navigationOptions: {
      headerTitle: 'Lobby'
    }
  },
  GameRoom: {
    screen: GameRoom,
    navigationOptions: {
      headerTitle: 'Game Room'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login'
    }
  }
});