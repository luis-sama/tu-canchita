import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Reserva = props => {
  return (
    <View style={styles.reservaItem}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.nombreCancha}>{props.cancha}</Text>
          <Text>Fecha: {props.fecha}</Text>
          <Text>Hora: {props.horario}</Text>
          <Text>Precio: ${props.precio}</Text>
        </View>
        <View style={styles.icon}>
          <Icon
            name='close-circle'
            size={25}
            color='red'
            onPress={() => {alert('CERRAR')}}
          />
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    reservaItem: {
      width: '100%',
      padding: 10,
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderBottomColor: '#b5acb7',
      borderBottomWidth: 2,
      marginBottom: 10
    },
    nombreCancha: {
      fontSize: 17,
      fontWeight: 'bold'
    },
    icon: {
      right: 15,
      top: 15,
      position: 'absolute'
  }
  });

export default Reserva;