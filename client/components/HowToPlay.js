import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
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

export default class HowToPlay extends Component {

  static navigationOptions = {
    header: null
 }

  constructor(props) {
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

componentDidMount() {
  Font.loadAsync({'Baloo-Regular': require('../../assets/font/Baloo-Regular.ttf')})
  .then(()=>{
    this.setState({isFontLoaded: true})
  })
}

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Button 
            onPress={() => {
              this.props.playCardDispatch('666', 'chopsticks')
              console.log(this.props.users)
            }}
            title="Press me"
          /> */}
          <View style={{flex: 1, flexDirection:'row' }}>
            <View style={styles.box}>
              <Text style={styles.font1}>3</Text>
              <Text style={styles.font}>Rounds</Text>
            </View>
            <View >
              <Text style={styles.font2}>In a <Text style={{color: '#FFDD17'}}>2</Text> player game, deal <Text style={{color: '#FFDD17'}}>10</Text> cards to each{'\n'}In a <Text style={{color: '#FFDD17'}}>3</Text> player game, deal <Text style={{color: '#FFDD17'}}>9</Text> cards to each{'\n'}In a <Text style={{color: '#FFDD17'}}>4</Text> player game, deal <Text style={{color: '#FFDD17'}}>8</Text> cards to each{'\n'}In a <Text style={{color: '#FFDD17'}}>5</Text> player game, deal <Text style={{color: '#FFDD17'}}>7</Text> cards to each</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#FFDD17', borderRadius: 10, top:-55, margin: 25 }}>
            <Text style={{fontFamily:'Baloo-Regular', fontSize: 22, color: '#262261', marginLeft: 15, marginRight: 15 }} >Choose 1 card. Reveal simultaneously. Pass hands to the left</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection:'row',top:-70, marginTop: 25, marginBottom:10 }}>
              <Image source={this.state.images.makiOne} style={styles.img}/>
              <Text style={styles.font3}>MAKI ROOLS{'\n'}Most: 6{'\n'}Second: 3{'\n'}Split ties</Text>
          
              <Text style={[styles.font3, {textAlign:'right', marginLeft:110}]}>NIGIRI{'\n'}Squid: 3{'\n'}Salmon: 2{'\n'}Egg: 1</Text>
              <Image source={this.state.images.egg} style={styles.img}/>
            </View>
            <View style={{flexDirection:'row',top:-70, marginTop: 25, marginBottom:10 }}>
                <Image source={this.state.images.tempura} style={styles.img}/>
                <Text style={styles.font3}>TEMPURA{'\n'}Set of 2: 5{'\n'}Otherwise: 0</Text>
            
                <Text style={[styles.font3, {textAlign:'right', marginLeft:110}]}>WASABI{'\n'}Triple the{'\n'}value of{'\n'}next nigiri</Text>
                <Image source={this.state.images.wasabi} style={styles.img}/>
            </View>
            <View style={{flexDirection:'row',top:-70, marginTop: 25, marginBottom:10 }}>
              <Image source={this.state.images.sashimi} style={styles.img}/>
              <Text style={styles.font3}>SASHIMI{'\n'}Set of 3: 10{'\n'}Otherwise: 0</Text>
          
              <Text style={[styles.font3, {textAlign:'right', marginLeft:80}]}>CHOPSTICKS{'\n'}Use on a later{'\n'}turn to swap{'\n'}for 2 cards</Text>
              <Image source={this.state.images.chopsticks} style={styles.img}/>
            </View>
            <View style={{flexDirection:'row',top:-70, marginTop:25 }}>
              <Image source={this.state.images.dumpling} style={styles.img}/>
              <Text style={styles.font3}>DUMPLING{'\n'}x 1  2  3  4  5 +{'\n'}   1  3  6 10 15 </Text>
          
              <Text style={[styles.font3, {textAlign:'right'}]}>PUDDING{'\n'}Score at game end{'\n'}Most: 6{'\n'}Least: -6{'\n'}Split ties</Text>
              <Image source={this.state.images.pudding} style={styles.img}/>
            </View>
            <Text style={{fontSize: 46, top: -50,bottom: 90}} onPress={() => this.props.navigation.navigate('StartMenu')}>👈🏻</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    height: 1100,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#213F99',
    justifyContent: 'center'
  },
  font: {
    margin: 0,
    top: -80,
    fontFamily: 'Baloo-Regular',
    fontSize: 32,
    color: '#262261'
  },
  font1: {
    margin: 0,
    top: -25,
    fontFamily: 'Baloo-Regular',
    fontSize: 110,
    color: '#262261'
  },
  font2: {
    top: 45,
    marginLeft: 40,
    fontFamily: 'Baloo-Regular',
    fontSize: 23,
    color: '#2AB573'
  },
  font3: {
    marginRight: 40,
    marginLeft: 40,
    fontFamily: 'Baloo-Regular',
    fontSize: 21,
    color: '#FFDD17'
  },
  box: {
    top: 50,
    width: 140,
    height: 140,
    backgroundColor: '#FFDD17',
    borderRadius: 10,
    alignItems: 'center'
  },
  img: {
    width: 62,
    height: 120
  }
})
