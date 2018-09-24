import React, { Component } from 'react'
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import Reserva from '../../Components/Reserva/Reserva';

class Reservas extends Component {
  render() {
    return (
      <View>
        <Reserva
          cancha="Nombre de la cancha"
          fecha="Fecha de la reserva"
          horario="Horario de la reserva"
          precio="Precio de la reserva"
        />
        <Divider style={{ backgroundColor: 'blue' }} />
        <Reserva
          cancha="Nombre de la cancha 2"
          fecha="Fecha de la reserva 2"
          horario="Horario de la reserva 2"
          precio="Precio de la reserva 2"
        />
        <Divider style={{ backgroundColor: 'blue' }} />
        <Reserva
          cancha="Nombre de la cancha 3"
          fecha="Fecha de la reserva 3"
          horario="Horario de la reserva 3"
          precio="Precio de la reserva 3"
        /> 
      </View>
    )
  }
}

export default Reservas;