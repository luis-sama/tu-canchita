import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import startMainTabs from '../MainTabs/startMainTabs';


const ANCHO_PANTALLA = Dimensions.get('window').width;

export default class Auth extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  
  loginHandler = () => {
    startMainTabs();
  };

  signuphandler = () => {
    this.props.navigator.push({
      screen: 'miApp.SignUpScreen',
    });
  }

  render() {
    return (
      <ImageBackground source={require('../../Imagenes/canchita.jpg')} style={styles.fondo}>
        <Image source={require('../../Imagenes/logo.png')}/>
        <View style={styles.formulario}>
          <TextInput style={styles.input} placeholder="Usuario"></TextInput>
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Contraseña"></TextInput>
          <View style={{marginBottom: 10, marginTop: 10}}><Button title='Iniciá sesión' onPress={this.loginHandler} style={{flex:1}}/></View>
          <Button title='Creá una cuenta' onPress={this.signuphandler} style={{flex:1}}/>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formulario: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: ANCHO_PANTALLA - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 25,
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    margin: 15
  }
});