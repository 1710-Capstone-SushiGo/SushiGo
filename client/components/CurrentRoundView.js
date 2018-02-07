import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { playCard, getCurrentUser } from '../store';
import {connect} from 'react-redux';
import { Font } from 'expo';
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


export default class CardsView extends Component {

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
            isFontLoaded: false
         }
     }

    async componentDidMount() {
        Font.loadAsync({'Baloo-Regular': require('../../assets/font/Baloo-Regular.ttf')})
        .then(()=>{
          this.setState({isFontLoaded: true})
        })
    } 

    render(){
        return(
           <View style={styles.container}>
               <View style={styles.name} style={{flex: 1}}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize:25, color: 'white'}}>Name</Text>
                {this.props.usersArray && this.props.usersArray.map((user, idx)=>{
                    idx++;
                    return(
                        <Text key={idx} style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', margin: 16}}>{user.name}</Text>
                    )
                })}
               </View>

               <View style={styles.cards} style={{flex: 3}}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Cards</Text>
                    {this.props.usersArray && this.props.usersArray.map((user, idx)=>{
                        return(
                            <View key={user.userId} style={{flexDirection: 'row'}}>
                            {user.keep.map((card, idx)=>{
                                idx++
                               return(
                                <Image key={idx} source={this.state.images[card]} style={{display: 'flex', height:50, width:30,margin: 5}}/>
                               ) 
                            })}
                            </View>
                        )
                    })}  
               </View>

               <View style={styles.name} style={{flex: 1}}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize:25, color: 'white'}}>Total Score</Text>
                {this.props.usersArray && this.props.usersArray.map((user, idx) =>{
                    idx++;
                    return(
                        <Text key={idx} style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', margin: 16}}>{user.score.reduce(((a,b) => a + b), 0)}</Text>
                    )
                })}
               </View>
               <Text
                style={[styles.fontTwo,this.state.isFontLoaded && {fontFamily: 'Baloo-Regular'}]} 
                onPress={() => this.props.currentRound}
                >
                Go Back
               </Text>
           </View> 
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height:'100%', 
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#262261',
        alignItems: 'center'

    },
    name: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '10%',
        // top: 48
    },
    cards: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '10%',
        // top: 40
    }
})
