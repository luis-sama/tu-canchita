import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cancha = (props) => (
    <TouchableOpacity onPress={props.onItemPressed} style={styles.canchaItem}>
      <Image resizeMode="contain" source={props.imagen} style={styles.canchaImagen} />
        <View style={{flexDirection: "column"}}>
          <Text style={styles.canchaNombre}>{props.nombre}</Text>
          <Text>{props.ubicacion}</Text>
          <Text>
            {props.puntaje}
            <Icon
              name='star'
              size={15}
            />
          </Text>
        </View>
      <Text style={styles.canchaPrecio}>${props.precio}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  canchaItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: '#b5acb7',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  canchaImagen: {
    marginRight: 8,
    height: 70,
    width: 70
  },
  canchaNombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  canchaPrecio: {
    fontSize: 30,
    position: 'absolute', 
    right: 15, 
    top: 25,
    fontWeight: 'bold',
  }
});

export default Cancha;