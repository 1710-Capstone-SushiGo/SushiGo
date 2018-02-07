import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, PanResponder, Animated, TouchableOpacity, Image, Modal } from 'react-native';
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


class RoundScore extends Component {

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
        let idx = 0
        console.log(this.props.users)
        return(
           <View style={styles.container}>
            <View>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 35 , color: 'white', top: '40%'}}>Round Score</Text>
            </View>
               <View style={styles.name}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Name</Text>
                {this.props.users && this.props.users.map(user=>{
                    idx++;
                    return(
                        <Text key={user.username} style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', margin: 13}}>{user.username}</Text>
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
               <View style={styles.cards}>
                    <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Cards</Text>
                            {this.props.users && this.props.users.map(user=>{
                                return(
                                    <View key={user.username} style={{flexDirection: 'row'}}>
                                    {user.keep.map(card=>{
                                        idx++
                                    return(
                                        <Image key={idx} source={this.state.images[card]} style={{display: 'flex', height:50, width:26, margin: 8}}/>
                                    ) 
                                    })}
                                    </View>
                                )
                            })}  
               </View>
               <View style={styles.score}>
                <Text style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: 'white'}}>Score</Text>
                    {this.props.users && this.props.users.map(user=>{
                        
                        return(
                            <View key={user.userId}>
                                    <Text key={user.username} style={{fontFamily: 'Baloo-Regular', fontSize: 25, color: '#FFDD17', margin: 13}}>{user.score[0]}</Text>
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
        top: 10
    },
    cards: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '40%',
        top: 10
    },
    // pudding:{

    // }
    round: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '22%',
        top: 10
    },
    score: {
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: '15%',
        top: 10
    }

})

export default connect(mapState)(RoundScore);