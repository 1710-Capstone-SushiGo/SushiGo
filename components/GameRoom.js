import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Draggable from 'react-native-draggable'

const GameRoom = ({ navigation }) => (
    <View >
        <Draggable renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/> 
        <Draggable reverse={false} renderColor='red' renderShape='square' offsetX={0} offsetY={0} renderText='B'/>
        <Draggable/>
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

export default GameRoom;