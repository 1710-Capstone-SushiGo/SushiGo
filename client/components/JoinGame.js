import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const JoinGame = (props) => (
    <View style={styles.container}>
        <Text>This is my JoinGame Component!</Text>
        <Button
            onPress={() => {
                props.navigation.navigate('Lobby', props.navigation.state.params)
            }}
            title="Join!"
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

export default JoinGame;