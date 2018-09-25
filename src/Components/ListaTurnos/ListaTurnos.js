import React from 'react';
import { ScrollView } from 'react-native';

import Turno from '../Turno/Turno';

const ListaTurnos = props => {

  const listarTurnos = props.turnos.map(turno => (
    <Turno
      fecha={turno.fecha}
      horario={turno.horario}
      onTurnoPressed={() => props.onTurnoSelected(turno.id)}
      alquilado={turno.alquilado}
      key={turno.id}
      nombreCancha={props.nombreCancha}
      precioCancha={props.precioCancha}
    />
 ));
 return <ScrollView>{listarTurnos}</ScrollView>
}

export default ListaTurnos;