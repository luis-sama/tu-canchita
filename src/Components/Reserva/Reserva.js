import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

Reserva = props => {
  return (
    <View style={styles.general}>
        <Text>{props.cancha}</Text>
        <Text>{props.fecha}</Text>
        <Text>{props.horario}</Text>
        <Text>{props.precio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    general: {
      flex: 1,
      width: null,
      height: '100%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      marginTop: 5,
      marginBottom: 5
    }
  });

export default Reserva;