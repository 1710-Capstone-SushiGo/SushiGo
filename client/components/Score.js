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
            images: {
                chopsticks,
                dumpling,
                egg,
                maki,
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
        let idx = 0
        console.log(this.props.users)
        return(
           <View style={styles.container}>
            <View>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 35, color: 'white', top: '40%'}}>Final Score</Text>
            </View>
            <View style={styles.name}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Rank</Text>
            </View>
               <View style={styles.name}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Name</Text>
                {this.props.users && this.props.users.map(user=>{
                    idx++;
                    return(
                        <Text key={idx} style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', top: 30}}>{user.username}</Text>
                    )
                })}
               </View>
               {/* <View style={styles.cards}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Cards</Text>
                    {this.props.users && this.props.users.map(user=>{
                        return(
                            <View key={user.userId} style={{flexDirection: 'row', top: 30}}> */}
                            {/* {user.keep.map(card=>{
                                idx++
                                return( 
                                <View key={idx} style={{flexDirection: 'column'}}>
                                <Image source={this.state.images[card]} style={{display: 'flex', height:40, width:40}}/>
                                 */}

                                {/* {user.keep.reduce((pre,current,i)=>{
                                        if(!pre[current])
                                            pre[current] = 1;
                                        else
                                            pre[current] +=1
                                        return (
                                            
                                        );
                                        },{})}
                                </View>
                            )
                            })}
                            </View>
                        )
                    })}  
               </View> */}
               <View style={styles.round}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Rounds</Text>
                {this.props.users && this.props.users.map(user=>{
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
                    <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>pudding</Text>
                    
               </View>

               <View style={styles.score}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Score</Text>
                    {this.props.users && this.props.users.map(user=>{
                        
                        return(
                            <View key={user.userId}>
                                    <Text  style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', top: 30}}>{user.score[0]+user.score[1]+user.score[2]}</Text>
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
        width: '15%',
        top: 40
    },
    // cards: {
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     width: '40%',
    //     top: 40
    // },
    // pudding:{

    // }
    round: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '22%',
        top: 40
    },
    score: {
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: '15%',
        top: 40
    }

})

export default connect(mapState)(Score);