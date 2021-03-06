import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-elements';

const onShare = (nombreCancha, ubicacionCancha) => {
  Share.share({
    title: 'El título',
    url: 'www.luifa.com',
    message: `Vení a visitar ${nombreCancha}\n${ubicacionCancha}`
  }), {
    dialogTitle: 'Compartir la canchita'
  }
}

const Cancha = (props) => (
    <TouchableOpacity onPress={props.onItemPressed} style={styles.canchaItem}>
      <Image resizeMode="contain" source={props.imagen} style={styles.canchaImagen} />
        <View style={{flexDirection: "column"}}>
          <Text style={styles.canchaNombre}>{props.nombre}</Text>
          <Rating
            imageSize={15}
            readonly
            startingValue={props.puntaje}
          />
        </View>
      <Text style={styles.canchaPrecio}>${props.precio}</Text>
      <TouchableOpacity onPress={() => onShare(props.nombre, props.ubicacion)}>
        <Icon name='share' size={16}/>
      </TouchableOpacity>
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