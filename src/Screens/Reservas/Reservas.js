import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native';
import Reserva from '../../Components/Reserva/Reserva'
import { connect } from 'react-redux';

class Reservas extends Component {
  render() {
    const reservas = this.props.canchas.map(cancha => {
      return cancha.turnos
      .filter(turno => {
        return turno.alquilado == true;
      })
      .map(turno => (
        <Reserva
          key={cancha.id}
          cancha={cancha.nombre}
          fecha={turno.fecha}
          horario={turno.horario}
          precio={cancha.precio}
        />
      ))
    })
    return (
      <ScrollView>
        {reservas}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    canchas: state.canchas.canchasFiltradas,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservas);