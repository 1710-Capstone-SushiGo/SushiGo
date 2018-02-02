import React from 'react'
import {View, Button, Text} from 'react-native'
import {FormLabel, FormInput} from 'react-native-elements'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'


/**
 * COMPONENT
 */
class AuthForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  
  render() {
    const {name, displayName, handleSubmit, error} = this.props
    console.log('Props: ', this.props)
    return (
      <View style={{width: '75%', alignItems: 'center'}}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={(text)=>this.setState({email: text.toLowerCase()})} />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry={true} onChangeText={(text)=>this.setState({password: text})} />
          <Button 
            title= {displayName}
            onPress={() => handleSubmit(this.state.email, this.state.password, name)}
          />
          {error && error.response && <View><Text>{error.response.data}</Text></View>}
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
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (email, password, formName) {
      dispatch(auth(email, password, formName))
    }
  }
}

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
