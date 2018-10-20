import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';
import ListaTurnos from '../ListaTurnos/ListaTurnos';
import { connect } from 'react-redux';
import { seleccionarTurno, cargarCanchasFiltradas, buscarCancha } from '../../store/actions/index'

class CanchaDetalle extends Component {
  state = {
    comodin: null
  }

  turnoSelectedHandler = id => {
    const { canchaSeleccionada } = this.props
    var dbTurno = firebase.database().ref().child(`canchas/${canchaSeleccionada.id}/turnos/${id}`)
    dbTurno.update({alquilado: true})
    .then(this.setState({comodin: '-'}))
  };

  componentDidUpdate() {
    const { canchaSeleccionada } = this.props
    if (canchaSeleccionada) {
      var dbTurnos = firebase.database().ref().child(`canchas/${canchaSeleccionada.id}/turnos`)
      dbTurnos.on('child_changed', snap => {
        canchaSeleccionada.turnos.map(turno => {
          if (turno.id == snap.key) {
            turno.alquilado = snap.val().alquilado
            this.props.buscarCancha('');
            this.props.cargarCanchasFiltradas();
          }
        })
      })
    }
  }
  
  render() {
    let modalContent = null;

    if (this.props.canchaSeleccionada) {
      modalContent = (
        <View>
          <Text style={styles.placeName}>{this.props.canchaSeleccionada.nombre}</Text>
          <Image source={this.props.canchaSeleccionada.imagen} style={styles.placeImage} />
          <ListaTurnos 
            turnos={this.props.canchaSeleccionada.turnos}
            onTurnoSelected={this.turnoSelectedHandler}
          />
        </View>
      );
    }
    return (
      <Modal visible={this.props.canchaSeleccionada !== null} animationType="slide" onRequestClose={() => {}} >
        <ScrollView style={styles.modalContainer}>
          {modalContent}
          <View>
            <Button title="Close" onPress={this.props.onModalClosed}/>
          </View>
        </ScrollView>
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

const mapStateToProps = state => {
  return {
    canchas: state.canchas.canchasFiltradas,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    seleccionarTurno: id => dispatch(seleccionarTurno(id)),
    cargarCanchasFiltradas: () => dispatch(cargarCanchasFiltradas()),
    buscarCancha: nombre => dispatch(buscarCancha(nombre)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanchaDetalle);