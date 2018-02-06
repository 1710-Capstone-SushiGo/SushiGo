import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';


export default class StartMenu extends React.Component {

	static navigationOptions = {
        header: null
    }

	state = {
		isFontLoaded: false,
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

	render(){
		//user logged in info: this.props.navigation.state.params
		const { isFontLoaded } =this.state;
		return (
			<View style={styles.container}>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('JoinGame', this.props.navigation.state.params)}>Join Game</Text>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('CreateGame', this.props.navigation.state.params)}>Create Game</Text>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('HowToPlay', this.props.navigation.state.params)}>How To Play</Text>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('GameRoom', this.props.navigation.state.params)}>Game Room</Text>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('Score', this.props.navigation.state.params)}>Score</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#213F99',
		alignItems: 'center',
		justifyContent: 'center',
	},
	font: {
		fontSize: 28,
		color: '#FFDD17',
		marginTop: 15
	}
 });
