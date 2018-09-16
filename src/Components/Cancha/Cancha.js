import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Cancha = (props) => (
  <View style={styles.canchaItem}>
  <Image resizeMode="contain" source={props.imagen} style={styles.canchaImagen} />
    <View style={{flexDirection: "column"}}>
      <Text>{props.nombre}</Text>
      <Text>$ {props.precio}</Text>
      <Text>{props.ubicacion}</Text>
      <Text>{props.puntaje}</Text>
    </View>
  </View>  
);

styles = StyleSheet.create({
  canchaItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: "center"
  },
  canchaImagen: {
    marginRight: 8,
    height: 70,
    width: 70
  }
});

export default Cancha;