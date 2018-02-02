import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

// const CreateGame = ({navigation}) => (
//     <View style={styles.container}>
//         <Text>This is my CreateGame Component!</Text>
//         <Button
//             onPress={() => navigation.navigate('Lobby')}
//             title="Create Game"
//         />
//     </View>
// );



export default class CreatGame extends React.Component {
    state = {
		isFontLoaded: false
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

   render(navigation){
    const { isFontLoaded } =this.state;
    return (
        <View style={styles.container}>
         <Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}>Create a Game</Text>

         <Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('Lobby')}>Lobby</Text>
    </View>
    )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#213F99',
        justifyContent: 'center'
    },
    
    font: {
		fontSize: 28,
		color: '#FFDD17',
		marginTop: 15
	}
})

// export default CreateGame;