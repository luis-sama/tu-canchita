import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

import ListaTurnos from '../ListaTurnos/ListaTurnos';

class CanchaDetalle extends Component {
  state = { 
    turnos: [
      {id: 1, fecha:'25-9-2018', horario:'16-17', alquilado: false, colorContainer: styles.turnoContainer},
      {id: 2, fecha:'25-9-2018', horario:'17-18', alquilado: false, colorContainer: styles.turnoContainer},
      {id: 3, fecha:'25-9-2018', horario:'18-19', alquilado: false, colorContainer: styles.turnoContainer},
      {id: 4, fecha:'25-9-2018', horario:'19-20', alquilado: false, colorContainer: styles.turnoContainer}
    ]
  }
  
  render() {
    let modalContent = null;

    if (this.props.canchaSeleccionada) {
      modalContent = (
        <View>
          <Image source={this.props.canchaSeleccionada.imagen} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.canchaSeleccionada.nombre}</Text>
          <ListaTurnos 
            turnos={this.state.turnos}
          />
        </View>
      );
    }
    return (
      <Modal visible={this.props.canchaSeleccionada !== null} animationType="slide" onRequestClose={() => {}} >
        <View style={styles.modalContainer}>
          {modalContent}
          <View>
            <Button title="Close" onPress={this.props.onModalClosed}/>
          </View>
        </View>
      </Modal>
    );
  }
}

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