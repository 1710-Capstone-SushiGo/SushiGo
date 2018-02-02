import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Testing from './Testing'
const JoinGame = ({ navigation }) => (
    <View style={styles.container}>
        <Text>This is my JoinGame Component!</Text>
        <Testing />
        <Button
            onPress={() => navigation.navigate('Lobby')}
            title="Join!"
        />
        {/* <TouchableWithoutFeedback
            onPressIn={()=> {<Testing />}}
        /> */}
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

export default JoinGame;