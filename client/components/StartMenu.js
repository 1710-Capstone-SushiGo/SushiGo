import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const StartMenu = ({ navigation }) => (
	<View style={styles.container}>
		<Button
			onPress={() => navigation.navigate('JoinGame')}
			title="Join Game"
		/>
		<Button
			onPress={() => navigation.navigate('CreateGame')}
			title="Create Game"
		/>
		<Button
			onPress={() => navigation.navigate('HowToPlay')}
			title="How To Play"
		/>
		<Button
			onPress={() => navigation.navigate('GameRoom')}
			title="Test Game Room"
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default StartMenu;