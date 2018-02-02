import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Testing extends Component {
    // <View style={styles.container}>
    constructor(){
        super()
    }

    render(){
        return(
            <View>
                <Text>This is my Testing Component!</Text>
            </View>
        )
    }
    
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#AAA',
//         justifyContent: 'center'
//     }
// })
