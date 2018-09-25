import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

import ListaTurnos from '../ListaTurnos/ListaTurnos';

class CanchaDetalle extends Component {
  state = { 
    
  }
  
  turnoSelectedHandler = id => {
    this.setState(
      this.props.canchaSeleccionada.turnos.map(turno => {
          if (turno.id == id) {
            return turno.alquilado = true
          }
        })
      )
    }

  

  render() {
    let modalContent = null;

    if (this.props.canchaSeleccionada) {
      modalContent = (
        <View>
          <Image source={this.props.canchaSeleccionada.imagen} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.canchaSeleccionada.nombre}</Text>
          <ListaTurnos 
            turnos={this.props.canchaSeleccionada.turnos}
            onTurnoSelected={this.turnoSelectedHandler}
            // nombreCancha={this.props.canchaSeleccionada.nombre}
            // precioCancha={this.props.canchaSeleccionada.precio}
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