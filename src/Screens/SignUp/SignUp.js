import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class SignUp extends Component {
  onSignUp = () => {
    startMainTabs();
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Usuario'/>
        <TextInput placeholder='Nombre'/>
        <TextInput placeholder='Apellido'/>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Contraseña' secureTextEntry={true}/>
        <TextInput placeholder="Repetir contraseña" secureTextEntry={true}/>
        <Button title='Crear usuario' onPress={this.onSignUp}/>
      </View>
    )
  }
}

export default SignUp;