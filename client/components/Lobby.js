import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Lobby = ({navigation}) => (
  <View style={styles.container}>
    <Text>This is my Lobby Component!</Text>
    <Button
            onPress={() => navigation.navigate('GameRoom')}
            title="Start Game"
        />
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