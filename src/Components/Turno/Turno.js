import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class Turno extends Component {
  state = {
    alquilado: false,
    colorContainer: styles.turnoContainer
  }

  onTurnoPressed = () => {
    if (this.state.alquilado == false) {
      this.setState({alquilado: true, colorContainer: styles.turnoContainerDesabilitado});
    } else {
      this.setState({alquilado: false, colorContainer: styles.turnoContainer});
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onTurnoPressed} style={this.state.colorContainer}>
        <Text style={styles.white}>{this.props.horario}</Text>
      </TouchableOpacity>
    )
  }
}

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
    color: "white"
  }
});

export default Turno;