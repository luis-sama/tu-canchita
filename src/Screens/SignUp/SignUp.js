import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import firebase from 'firebase';


class SignUp extends Component {

  state = {
    email: "",
    password: "",
    passwordConfirmacion: ""
  }
  
  onSignUp = (email, password, passwordConfirmacion) => {
    if (this.state.password.length < 6) {
      alert("Please, enter at least 6 characters");
      return;
    }
    if (this.state.password !== this.state.passwordConfirmacion) {
      alert("Las contraseñas no coinciden")
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {startMainTabs()})
    .catch(error => {alert(error)})
  }

  render() {
    return (
      <View>
        <TextInput 
          placeholder="Email" 
          textContentType="emailAddress" 
          onChangeText={email => this.setState({email})}
        />
        <TextInput 
          placeholder="Contraseña" 
          textContentType="password" 
          onChangeText={password => this.setState({password})} 
          secureTextEntry={true}
        />
        <TextInput 
          placeholder="Repetir" 
          textContentType="password" 
          onChangeText={passwordConfirmacion => this.setState({passwordConfirmacion})} 
          secureTextEntry={true}
        />
        <Button 
          title="Crear usuario" 
          onPress={() => this.onSignUp(this.state.email, this.state.password, this.state.passwordConfirmacion)}
        />
      </View>
    )
  }
}

export default SignUp;