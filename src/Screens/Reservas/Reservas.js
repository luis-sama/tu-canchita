import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import Reserva from '../../Components/Reserva/Reserva'
import { connect } from 'react-redux';
import { cargarCanchasFiltradas, buscarCancha } from '../../store/actions/index';

class Reservas extends Component {
  state = {
    reservas: null
  }

  componentDidUpdate() {
    
  }

  render() {
    reservas = this.props.canchas.map(cancha => {
      return cancha.turnos
      .filter(turno => {
        return turno.alquilado == true;
      })
      .map(turno => (
        <Reserva
          key={cancha.id}
          canchaId={cancha.id}
          turnoId={turno.id}
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
  return {
    cargarCanchasFiltradas: () => dispatch(cargarCanchasFiltradas()),
    buscarCancha: nombre => dispatch(buscarCancha(nombre))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservas);