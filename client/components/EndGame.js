import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image, Modal } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { playCard, getCurrentUser } from '../store';
import {connect} from 'react-redux';
import { Font } from 'expo';

import pudding from '../../public/img/sushi/Pudding.png';



class Score extends Component {

    static navigationOptions = {
        header: null
     }

     constructor(props){
         super(props)
         this.state = {
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
        let propUsers = this.props.navigation.state.params
        console.log(propUsers[0])
        console.log(propUsers[1])
        return(
           <View style={styles.container}>
            <View>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 33, color: 'white', top: '40%'}}>Final Score</Text>
                <Text
                    style={{fontFamily: 'Baloo-Regular', fontSize: 33, color: 'white', top: '40%'}}
                >
                Go To Start Menu
                </Text>
            </View>
               <View style={styles.name}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17'}}>Name</Text>
                {propUsers && propUsers.map((user, idx)=>{
                    return(
                        <Text key={user.name} style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', top: 30}}>{user.name}</Text>
                    )
                })}
               </View>
               <View style={styles.round}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Rounds</Text>
                {propUsers && propUsers.map((user, idx)=>{
                    return(
                        <View key={user.userId} style={{flexDirection: 'row'}}>
                            {user.score.map(score=>{
                                idx++; 
                                return (
                                     <Text key={idx} style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', top: 30, marginLeft: 7, marginRight: 7}}>{score}</Text>
                                )
                            })}
                        </View>
                    )
                })}
                
               </View>
               <View style={styles.score}>
                    <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Pudding</Text>
                    {propUsers.map((user, idx)=>{
                        return (
                            <View key={user.name}  style={{flexDirection: 'row', top: 30}}>
                                <Image key={user.name} source={pudding} style={{display: 'flex', height:30, width:30, top: 2}}/>
                                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white', marginLeft: 8}}>{user.puddingScore}</Text>
                            </View>
                        )
                    })}
               </View>

               <View style={styles.score}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Score</Text>
                    {propUsers && propUsers.map((user, idx)=>{
                        
                        return(
                            <View key={user.name}>
                                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', top: 30}}>{user.totalScore}</Text>
                            </View>
                        )
                    })}
               </View>
           </View> 
        )
    }

}

const mapState = state => {
    return {
      users: state.gameUser.all,
      currentUser: state.gameUser.current
    }
  }

const styles = StyleSheet.create({
    container: {
        height:'100%', 
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#262261'
    },
    name: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '10%',
        top: 40,
        marginLeft: '6%'
    },
    round: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '20%',
        top: 40
    },
    score: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '14%',
        top: 40
    }

})

export default connect(mapState)(Score);