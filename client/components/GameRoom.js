import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image, Modal } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { playCard, getUsers } from '../store';
import {connect} from 'react-redux';
import io from 'socket.io-client/dist/socket.io'
import Orientation from 'react-native-orientation';
import Draggable from './Draggable'
import { Font } from 'expo'
import userAvatar from '../../public/img/userAvatar.png';
import chopsticks from '../../public/img/cardViews/chopsticks.png';
import dumpling from '../../public/img/cardViews/dumpling.png';
import egg from '../../public/img/cardViews/egg.png';
import makiOne from '../../public/img/cardViews/makiOne.png';
import makiTwo from '../../public/img/cardViews/makiTwo.png';
import makiThree from '../../public/img/cardViews/makiThree.png';
import pudding from '../../public/img/cardViews/pudding.png';
import salmon from '../../public/img/cardViews/salmon.png';
import sashimi from '../../public/img/cardViews/sashimi.png';
import squid from '../../public/img/cardViews/squid.png';
import tempura from '../../public/img/cardViews/tempura.png';
import wasabi from '../../public/img/cardViews/wasabi.png';
import fullchopsticks from '../../public/img/cards/chopsticks.png';
import fulldumpling from '../../public/img/cards/dumpling.png';
import fullegg from '../../public/img/cards/egg.png';
import fullmakiOne from '../../public/img/cards/makiOne.png';
import fullmakiTwo from '../../public/img/cards/makiTwo.png';
import fullmakiThree from '../../public/img/cards/makiThree.png';
import fullpudding from '../../public/img/cards/pudding.png';
import fullsalmon from '../../public/img/cards/salmon.png';
import fullsashimi from '../../public/img/cards/sashimi.png';
import fullsquid from '../../public/img/cards/squid.png';
import fulltempura from '../../public/img/cards/tempura.png';
import fullwasabi from '../../public/img/cards/wasabi.png';

class GameRoom extends Component {

  static navigationOptions = {
     header: null
  }

  constructor(props){
    super(props)
    this.state = {
      images: {
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
      },
      fullImages:{
        chopsticks: fullchopsticks,
        dumpling: fulldumpling,
        egg: fullegg,
        makiOne: fullmakiOne,
        makiTwo: fullmakiTwo,
        makiThree: fullmakiThree,
        pudding: fullpudding,
        salmon: fullsalmon,
        sashimi: fullsashimi,
        squid: fullsquid,
        tempura: fulltempura,
        wasabi: fullwasabi
      },
      endGame: false,
      selectedCard: '',
      modalVisible: false,
      isFontLoaded: false,
    }
    this.socket.on('newUsersInfo',(users) => {
      this.props.dispatchUsers({all:users, currentUser: users.filter((user) => user.id===this.state.currentUser.id)[0]})
      this.setState({users, currentUser: users.filter((user) => user.id===this.state.currentUser.id)[0]})})
    }

  socket = this.props.navigation.state.params.socket


  async componentDidMount() {
    let params = this.props.navigation.state.params
    let current = params.users.filter((user) => user.id === params.userId)[0]
    await this.props.dispatchUsers({all:params.users, current})
    this.setState({users:this.props.users, currentUser: this.props.currentUser})
    Font.loadAsync({'Baloo-Regular': require('../../assets/font/Baloo-Regular.ttf')})
    .then(()=>{
      this.setState({isFontLoaded: true})
    })
  }

  handleSelect = async (image) => {
    await this.setState({selectedCard: image})
  }

  //handleChopsticks
  handleChopsticks = () => {
    chopsticksIndex = this.state.currentUser.keep.indexOf('chopsticks')
    this.state.currentUser.keep.splice(chopsticksIndex, 1)
    this.state.currentUser.hand.push('chopsticks')
    this.state.currentUser.playedChopsticks = true
  }

  openModal = async (image) => {
    await this.setState({selectedCard: image, modalVisible:true})
	}
	
	closeModal() {
		this.setState({modalVisible:false});
	}
  
  render() {
    console.log('-------PLAYERID--------: ', this.state.currentUser && this.state.currentUser.playerId)
    const { isFontLoaded } =this.state;
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
        <View style={[styles.background,{flexDirection: 'row', margin: 5}]}>
        {
          this.state.currentUser && this.state.currentUser.keep && this.state.currentUser.keep.map((image, idx) => {
            idx++;
            return (
              <View key={idx} style={{bottom:4,right:4,margin:6}}>
                <TouchableOpacity style={{height:75, width:40, margin:5}}>
                  <Image source={this.state.images[image]} style={{height:75, width:40, margin:5}}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
       </View>
       <View style={{flexDirection: 'row', margin: 5}}>
        {
          this.state.currentUser && this.state.currentUser.hand && this.state.currentUser.hand.map((image, idx) => {
            idx++
            return (
              <View key={idx} style={{}}>
                {/* disable button if playedCard is true */}
                <TouchableOpacity style={{height:75, width:40, margin:5}} disabled={this.state.currentUser.playedCard}  onPress={() => this.openModal(image)}>
                  <Image source={this.state.images[image]} style={{height:75, width:40, margin:5}}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
       </View>

       <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              supportedOrientations={['landscape']}
              transparent= {true}
              animationType={'fade'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Image source={this.state.fullImages[this.state.selectedCard]} style={{height:225, width:190, margin:5}}/>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                  <Text
                    style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]} 
                    onPress={() => {
                      this.props.playCardDispatch(this.state.currentUser.playerId, this.state.selectedCard)
                      this.setState({selectedCard: ''})
                      this.socket.emit('endTurn', this.state.currentUser, 'test')
                      this.closeModal();
                    }}
                  >
                  Play Card
                  </Text>
                 <Text
                  style={[styles.fontTwo,isFontLoaded && {fontFamily: 'Baloo-Regular'}]} 
                    onPress={() => {
                      this.closeModal()
                    }}>
                    Go Back
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const mapState = state => {
  return {
    users: state.gameUser.all,
    currentUser: state.gameUser.current
  }
}

const mapDispatch = dispatch => {
  return ({
    dispatchUsers(Users) {
      dispatch(getUsers(Users))
    },
    playCardDispatch(playerId, card) {
      dispatch(playCard(playerId, card))
    }
  })
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(35, 31, 32, .9)',
	  },
	innerContainer: {
		alignItems: 'center',
	  },
  font: {
    fontSize: 14,
    color: '#FFDD17',
    marginTop: 15
  },
  fontTwo: {
    fontSize: 18,
    color: '#FFDD17',
    marginTop: 15,
    marginLeft: 40
  },
  background:{
    backgroundColor: '#262261',
    borderRadius: 10
  }
 });


export default connect(mapState, mapDispatch)(GameRoom);
