import React from 'react';
import { ScrollView } from 'react-native';

import Turno from '../Turno/Turno';

const ListaTurnos = props => {
  const listarTurnos = props.turnos.map((turno, i) => (
    <Turno 
      fecha={turno.fecha}
      horario={turno.horario}    
      key={i}
    />
 ));
 return <ScrollView>{listarTurnos}</ScrollView>
}

export default ListaTurnos;