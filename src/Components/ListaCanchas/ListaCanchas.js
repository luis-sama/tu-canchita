import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Cancha from '../Cancha/Cancha';

const ListaCanchas = props => {
  const listarCanchas = props.canchas.map(cancha => (
    <Cancha
      nombre={cancha.nombre}
      precio={cancha.precio}
      ubicacion={cancha.ubicacion}
      puntaje={cancha.puntaje}
      imagen={cancha.imagen}
      onItemPressed={() => props.onItemSelected(cancha.id)}
      key={cancha.id}
    />
    ));
    return <ScrollView style={styles.listContainer}>{listarCanchas}</ScrollView>
  };

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default ListaCanchas;