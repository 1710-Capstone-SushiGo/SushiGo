import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {FormLabel, FormInput} from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

class JoinGame extends Component { 

    static navigationOptions = {
        header: null
     }

constructor(props){
    super(props)
}

    render(){
        return(
            <View style={styles.container}>
             <View style={styles.form}>
                <FormLabel><Text style={styles.font}>Game ID</Text></FormLabel>
                <FormInput onChangeText={(text)=>this.setState({email: text.toLowerCase()})} />
             </View>
             <View style={{flexDirection:'row'}}>
                <Text style={{fontSize: 46}}
                    onPress={() => {
                        this.props.navigation.navigate('StartMenu')
                    }}
                >👈🏻</Text>
                <Text style={{fontSize: 46}}
                    onPress={() => {
                        this.props.navigation.navigate('CreatGame')
                    }}
                >👉🏻</Text>
            </View>
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
    form: {
        top: -80,
        width: '50%',
    }
})

export default JoinGame;