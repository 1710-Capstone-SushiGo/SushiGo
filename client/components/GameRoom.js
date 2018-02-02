import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image, Modal } from 'react-native';
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
//----------------------Cards-------------------------
import Chopsticks from '../../public/img/cards/chopsticks.png';
// import dumpling from '../../public/img/cards/dumpling.png';
// import egg from '../../public/img/cards/egg.png';
// import makiOne from '../../public/img/cards/maki1.png';
// import makiTwo from '../../public/img/cards/maki2.png';
// import makiThree from '../../public/img/cards/maki3.png';
// import pudding from '../../public/img/cards/pudding.png';
// import salmon from '../../public/img/cards/salmon.png';
// import sashimi from '../../public/img/cards/sashimi.png';
// import squid from '../../public/img/cards/squid.png';
// import tempura from '../../public/img/cards/tempura.png';
// import wasabi from '../../public/img/cards/wasabi.png';

class GameRoom extends Component {

  
  constructor(){
    super()
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
      // fullImages:{
      //   chopsticks,
      //   dumpling,
      //   egg,
      //   makiOne,
      //   makiTwo,
      //   makiThree,
      //   pudding,
      //   salmon,
      //   sashimi,
      //   squid,
      //   tempura,
      //   wasabi
      // },
      selectedCard: '',
      modalVisible: false
    }

    this.socket = io('http://localhost:3000')
    this.socket.on('sendhelp', (msg) => console.log(msg))
    this.socket.emit('help', 'help requested')
  }

  componentDidMount() {
    this.props.getCurrentUserDispatch('666')
  }

  handleSelect = async (image) => {
    await this.setState({selectedCard: image})
  }

  openModal = async (image) => {
    await this.setState({selectedCard: image, modalVisible:true})
	}
	
	closeModal() {
		this.setState({modalVisible:false});
	  }
  
  render() {
    let idx = 0
    let imagePath = ''
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
            // console.log(this.state.selectedCard)
            return (
              <View key={idx} style={{}}>
                <TouchableOpacity style={{height:75, width:40, margin:5}} onPress={() => this.openModal(image)}>
                  <Image source={this.state.images[image]} style={{height:75, width:40, margin:5}}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
        <Button 
          onPress={() => {
            if (this.state.selectedCard!== '') this.props.playCardDispatch('666', this.state.selectedCard)
            this.setState({selectedCard: ''})
            var message = this.props;
            this.socket.emit('new-state', message);
          }}
          title="Play Card"
        />
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
              <Image source={Chopsticks} style={{height:225, width:190, margin:5}}/>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
          {/* <Button
              onPress={() => this.openModal()}
              title="Open modal"
          /> */}
        </View>



      </View>
    );
  }
}
// console.log(this.props)
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

const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,
	// 	backgroundColor: '#213F99',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	// font: {
	// 	fontSize: 28,
	// 	color: '#FFDD17',
	// 	marginTop: 15
	// }
	modalContainer: {
    // height: 50,
    // width: 30,
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(35, 31, 32, .9)' ,
	  },
	innerContainer: {
		alignItems: 'center',
	  }
 });


export default connect(mapState, mapDispatch)(GameRoom);

