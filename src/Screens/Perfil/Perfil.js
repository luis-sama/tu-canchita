import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import firebase from 'firebase';


class Perfil extends Component {
  handleLogOut = () => {
    firebase.auth().signOut()
    .then(() => {/*Esto funciona, pero tendría que redirigir al screen de Auth*/})
    .catch(error => alert(error))
  }

  render() {
    var user = firebase.auth().currentUser;
    return (
      <View style={styles.fondo}>
        <Avatar
          xlarge
          rounded
          source={{uri: user.photoURL}}
          title="IM"
        />
        <Text style={{fontSize: 18, color: 'black', marginTop: 10}}>{user.displayName}</Text>
        <Text style={{fontSize: 18, color: 'black', marginTop: 10}}>{user.email}</Text>
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