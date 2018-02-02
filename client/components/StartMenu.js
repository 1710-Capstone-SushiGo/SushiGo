import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';



// const StartMenu = ({ navigation }) => (
// 	<View style={styles.container}>
// 		<Button
// 			onPress={() => navigation.navigate('JoinGame')}
// 			title="Join Game"
// 		/>
// 		<Button
// 			onPress={() => navigation.navigate('CreateGame')}
// 			title="Create Game"
// 		/>
// 		<Button
// 			onPress={() => navigation.navigate('HowToPlay')}
// 			title="How To Play"
// 		/>
// 		<Button
// 			onPress={() => navigation.navigate('GameRoom')}
// 			title="Test Game Room"
// 		/>
// 	</View>
// );

export default class StartMenu extends React.Component {
	static navigationOptions = {
        header: null
    }
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
			
			{/* <Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}>Create Game</Text> */}
			{/* <View style={styles.container}> */}
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('JoinGame')}>Join Game</Text>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('CreateGame')}>Create Game</Text>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('HowToPlay')}>How To Play</Text>
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('GameRoom')}>Game Room</Text>
			{/* </View> */}
			 		
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

// export default StartMenu;
