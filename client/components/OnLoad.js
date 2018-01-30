import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class OnLoad extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { showText: true };
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        },
            500);
    }

    render(navigation) {
        let display = this.state.showText ? this.props.text : 'Press Anywhere To Start';
        return (
            <View style={styles.container}
                onResponderGrant={() => this.props.navigation.navigate('StartMenu')}
                onStartShouldSetResponder={(e) => { return true }}
            >
                <Text style={{ fontSize: 40, color: '#841584' }}>Sushi GO!</Text>
                <Image source={require('../../public/img/sushi.png')} style={{ resizeMode: 'center', flex: 0.6 }} />
                <Text style={{ fontSize: 20, color: 'white' }} > {display}</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8df40',
        alignItems: 'center',
        justifyContent: 'center'
    },
});