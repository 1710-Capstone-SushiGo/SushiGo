import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Lobby = () => (
  <View style={styles.container}>
    <Text>This is my Lobby Component!</Text>
  </View>
);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#AAA',
        justifyContent: 'center' 
    }
})

export default Lobby;