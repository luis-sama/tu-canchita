import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-elements';

const onShare = () => {
  Share.share({
    title: 'El título',
    url: 'www.luifa.com',
    message: 'Chileno puto'
  }), {
    dialogTitle: 'Compartir la canchita'
  }
}

const Cancha = (props) => (
    <TouchableOpacity onPress={props.onItemPressed} style={styles.canchaItem}>
      <Image resizeMode="contain" source={props.imagen} style={styles.canchaImagen} />
        <View style={{flexDirection: "column"}}>
          <Text style={styles.canchaNombre}>{props.nombre}</Text>
          {/* <Text>{props.ubicacion}</Text> */}
          <Text>
            {props.puntaje}
            <Icon
              name='star'
              size={15}
            />
            {/* <Rating
              imageSize={15}
              readonly
              startingValue={3}
            /> */}
          </Text>
        </View>
      <Text style={styles.canchaPrecio}>${props.precio}</Text>
      <TouchableOpacity onPress={onShare}>
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