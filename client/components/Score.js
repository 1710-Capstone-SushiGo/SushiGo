import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image, Modal } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { playCard, getCurrentUser } from '../store';
import {connect} from 'react-redux';
import { Font } from 'expo';
import userAvatar from '../../public/img/userAvatar.png';
import chopsticks from '../../public/img/sushi/Chopsticks.png';
import dumpling from '../../public/img/sushi/Dumpling.png';
import egg from '../../public/img/sushi/EggNigiri.png';
import maki from '../../public/img/sushi/Maki.png';
import pudding from '../../public/img/sushi/Pudding.png';
import salmon from '../../public/img/sushi/Salmon.png';
import sashimi from '../../public/img/sushi/Sashimi.png';
import squid from '../../public/img/sushi/SquidNigiri.png';
import tempura from '../../public/img/sushi/Tempura.png';
import wasabi from '../../public/img/sushi/Wasabi.png';


class Score extends Component {

    static navigationOptions = {
        header: null
     }

     constructor(){
         super()
         this.state = {

         }
     }

    render(){
        return(
           <View>Hello World</View> 
        )
    }

}

const mapState = state => {
    return {
      users: state.gameUser.all,
      currentUser: state.gameUser.current
    }
  }

export default connect(mapState)(Score);