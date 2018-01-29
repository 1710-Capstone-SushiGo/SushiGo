import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const CreateGame = ({navigation}) => (
    <View style={styles.container}>
        <Text>This is my CreateGame Component!</Text>
        <Button
            onPress={() => navigation.navigate('Lobby')}
            title="Create Game"
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

export default CreateGame;