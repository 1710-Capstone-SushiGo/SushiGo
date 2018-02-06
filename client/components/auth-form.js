import React from 'react'
import {View, Button, Text, StyleSheet} from 'react-native'
import {FormLabel, FormInput} from 'react-native-elements'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {fetchUser} from '../store/'
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo'

/**
 * COMPONENT
 */
class AuthForm extends React.Component {

  static navigationOptions = {
    header: null
 }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isFontLoaded: false
    }
  }

  async componentDidMount() {
    Font.loadAsync({'Baloo-Regular': require('../../assets/font/Baloo-Regular.ttf')})
    .then(()=>{
      this.setState({isFontLoaded: true})
    })
  }

  render() {
    const {name, displayName, handleSubmit, error} = this.props
    //passes user as: this.props.navigation.state.params
    if(this.props.user.id) this.props.navigation.navigate('StartMenu', this.props.user)
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <FormLabel><Text style={styles.font}>Email</Text></FormLabel>
          <FormInput onChangeText={(text)=>this.setState({email: text.toLowerCase()})} />
          <FormLabel><Text style={styles.font}>Password</Text></FormLabel>
          <FormInput secureTextEntry={true} onChangeText={(text)=>this.setState({password: text})} />
          <Text style={styles.login}
            onPress={() => handleSubmit(this.state.email, this.state.password, name)}>{displayName}
          </Text>
          {error && error.response && <View><Text style={{fontFamily:'Baloo-Regular',color: 'red', fontSize: 15, marginLeft: '4%'}}>{error.response.data}</Text></View>}
        </View>
      </View>

    )
  }
}


/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
    user: state.user
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (email, password, formName) {
      dispatch(auth(email, password, formName))
    }
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    backgroundColor: '#213F99'
    },
    form: {
      width: 500,
      marginLeft: '15%'
    },
    login: {
      fontFamily: 'Baloo-Regular',
      fontSize: 44,
      color: '#FFDD17',
      marginLeft: '35%',
      top: 20
    },
    font: {
      fontFamily: 'Baloo-Regular',
      fontSize: 24,
      color: '#FFDD17'
    }

 });

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
