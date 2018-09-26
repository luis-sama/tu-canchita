import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Turno = props => {

  let colorFondo = "styles.turnoContainer";
  
  if (props.alquilado == true) {
    colorFondo = "styles.turnoContainerDesabilitado";
  }

  return (
    <TouchableOpacity onPress={props.onTurnoPressed} style={eval(colorFondo)}>
      <Text style={styles.white}>
        <Icon 
          name="calendar"
          size={15}
        />
        Fecha: {props.fecha}
      </Text>
      <Text style={styles.white}>
        <Icon 
          name="timer"
          size={15}
        />
        Hora: {props.horario}
      </Text>
      <Text>{props.nombreCancha}</Text>
      <Text>{props.precioCancha}</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  turnoContainer: {
    margin: 3,
    padding: 5,
    backgroundColor: "#27e134",
    width: "100%",
    alignItems: "center"
  },
  turnoContainerDesabilitado: {
    margin: 3,
    padding: 5,
    backgroundColor: "red",
    width: "100%",
    alignItems: "center"
  },
  white: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  }
});

export default Turno;