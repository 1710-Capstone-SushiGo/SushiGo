import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store from '../store';
import {Provider} from 'react-redux';
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
import { Font } from 'expo';

export default class OnLoad extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { showText: true,
                   isFontLoaded: false,
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
                        } };
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        },
            500);
    }

    componentDidMount(){
        Font.loadAsync({
           'Baloo-Regular': require('../../assets/font/Baloo-Regular.ttf')
       }).then(()=>{
           this.setState({
               isFontLoaded: true
           })
       })
   }

    render(navigation) {
        const { isFontLoaded } =this.state;
        let display = this.state.showText ? this.props.text : 'Press Anywhere To Start';
        return (
            <Provider store = {store}>
            <View style={styles.container}
                onResponderGrant={() => this.props.navigation.navigate('StartMenu')}
                onStartShouldSetResponder={(e) => { return true }}
            >
                {/* <Text style={{ fontSize: 40, color: '#841584' }}>Sushi GO!</Text> */}
                <Image source={require('../../public/img/logo.png')} style={{ resizeMode: 'center', flex: 0.8, top: -5, width: 190, height: 140 }} />

                <View style={{ flexDirection: 'row', width:1000, height:150 }}>
                {/* {this.state.images[Math.floor(Math.random()*10+1)]} */}
                    <Image source={egg} style={{ width: 170, height: 130, marginLeft: 100 }}/>
                    <Image source={maki} style={{ width: 170, height: 130, marginLeft: 40 }}/>
                    <Image source={salmon} style={{ width: 170, height: 130, marginLeft: 40 }}/>
                    <Image source={sashimi} style={{ width: 170, height: 130, marginLeft: 40 }}/>
                </View>

                <Text style={[ styles.font ,isFontLoaded && {fontFamily: 'Baloo-Regular'} ]} > {display}</Text>
            </View >
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#213F99',
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        fontSize: 20, color: '#FFDD17'
    }
});