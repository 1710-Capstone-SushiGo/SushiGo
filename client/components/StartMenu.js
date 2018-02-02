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
		// modalVisible: false
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

	// openModal() {
	// 	this.setState({modalVisible:true});
	//   }
	
	// closeModal() {
	// 	this.setState({modalVisible:false});
	//   }

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
				<Text style={[styles.font,isFontLoaded && {fontFamily: 'Baloo-Regular'}]}
					onPress={() => this.props.navigation.navigate('Login')}>Login</Text>
			{/* </View> */}
			 		

			{/* <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Open modal"
          />
        </View> */}


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
// 	modalContainer: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		backgroundColor: 'grey',
// 	  },
// 	  innerContainer: {
// 		alignItems: 'center',
// 	  },
 });

// export default StartMenu;
