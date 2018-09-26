import React from 'react';
import { ScrollView } from 'react-native';
import Reserva from '../Reserva/Reserva'

const ListaReservas = props => {

  const listarReservas = props.reservas.map(reserva => (
    <Reserva
			cancha={reserva.cancha}
      fecha={reserva.fecha}
      horario={reserva.horario}
      precio={reserva.precio}
    />
 ));
 return <ScrollView>{listarReservas}</ScrollView>
}

export default ListaReservas;