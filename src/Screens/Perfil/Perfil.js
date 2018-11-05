import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Perfil extends Component {
  state = {
    editarNombre: false,
    editarMail: false,
    user: firebase.auth().currentUser,
    nombre: '',
    email: '',
  }

  handleLogOut = () => {
    firebase.auth().signOut()
    .then(() => {
      this.props.navigator.push({
        screen: 'miApp.AuthScreen',
      });
    })
    .catch(error => alert(error))
  }

  // cambioMail(email) {
  //   this.setState({email})
  //   this.state.user.updateEmail(this.state.email)
  // }

  cambioNombre(nombre) {
    this.setState({nombre})
    this.state.user.updateProfile({displayName: this.state.nombre})
  }

  render() {
    // var user = firebase.auth().currentUser;
    const { user } = this.state;
    var storageRef = firebase.storage().ref()
    return (
      <View style={styles.fondo}>
        <Avatar
          xlarge
          rounded
          source={{uri: user.photoURL}}
          title="IM"
          onPress={() => console.log(user.uid)}
        />
        <View style={{flexDirection:'row'}}>
          <TextInput style={{fontSize: 18, color: 'black', marginTop: 10, width: 100}} onBlur={nombre => this.cambioNombre(nombre)} editable={this.state.editarNombre} placeholder='nombre'>{user.displayName}</TextInput>
          <TouchableOpacity>
            <Icon name="pencil" style={{fontSize: 18, color: 'black', marginTop: 10}} onPress={() => this.setState({editarNombre:!this.state.editarNombre})}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TextInput style={{fontSize: 18, color: 'black', marginTop: 10}} onBlur={email => this.cambioMail(email)} editable={this.state.editarMail}>{user.email}</TextInput>
          <TouchableOpacity>
            <Icon name="pencil" style={{fontSize: 18, color: 'black', marginTop: 10}} onPress={() => this.setState({editarMail:!this.state.editarMail})}/>
          </TouchableOpacity>
        </View>
        <View style={{bottom: 15, position: 'absolute'}}>    
          <Button
            title="Cerrar sesión" 
            onPress={() => this.handleLogOut}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 20,
    alignItems: 'center'
  }
});

export default Perfil;