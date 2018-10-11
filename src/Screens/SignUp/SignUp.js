import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import firebase from 'firebase';


class SignUp extends Component {

  state = {
    email: "",
    password: "",
    passwordConfirmacion: "",
    nombre: ""
  }
  
  onSignUp = (email, password) => {
    if (this.state.password.length < 6) {
      alert("Please, enter at least 6 characters");
      return;
    }
    if (this.state.password !== this.state.passwordConfirmacion) {
      alert("Las contraseñas no coinciden")
      return;
    if (this.state.nombre === "") {
      alert("Debe ingresar un nombre completo")
    }
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.updateProfile({displayName: this.state.nombre})
      startMainTabs()
    })
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
          placeholder="Repetir contraseña" 
          textContentType="password" 
          onChangeText={passwordConfirmacion => this.setState({passwordConfirmacion})} 
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Nombre y apellido"
          onChangeText={nombre => this.setState({nombre})}
        />
        <Button 
          title="Crear usuario" 
          onPress={() => this.onSignUp(this.state.email, this.state.password)}
        />
      </View>
    )
  }
}

export default SignUp;