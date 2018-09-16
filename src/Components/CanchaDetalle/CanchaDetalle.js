import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

import Turno from '../Turno/Turno';

const CanchaDetalle = props => {
  let modalContent = null;

  if (props.canchaSeleccionada) {
    modalContent = (
      <View>
        <Image source={props.canchaSeleccionada.imagen} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.canchaSeleccionada.nombre}</Text>
        <Turno horario="15-16"/>
        <Turno horario="19-20"/>
      </View>
    );
  }
  return (
    <Modal visible={props.canchaSeleccionada !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Close" onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default CanchaDetalle;