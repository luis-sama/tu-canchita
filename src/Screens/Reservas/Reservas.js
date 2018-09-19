import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Reservas extends Component {
  render() {
    return (
      <View>
          <TouchableOpacity>
            <Icon size={30} name="search"/>
          </TouchableOpacity>
          <Text>MIS RESERVAS</Text>
      </View>
    )
  }
}

export default Reservas;