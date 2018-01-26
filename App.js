import { StackNavigator } from 'react-navigation'
import StartMenu from './components/StartMenu'
import JoinGame from './components/JoinGame'
import CreateGame from './components/CreateGame'
import HowToPlay from './components/HowToPlay'
import Lobby from './components/Lobby'

export default RootNavigator = StackNavigator({
  Main: {
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
  }
});