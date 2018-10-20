import React , { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'firebase';
import { cargarCanchasFiltradas } from '../../store/actions/index'
import { connect } from 'react-redux';

class Reserva extends Component {
  state = {
    comodin: null
  }

  cancelarReserva = () => {
    var dbTurno = firebase.database().ref().child(`canchas/${this.props.canchaId}/turnos/${this.props.turnoId}`)
    dbTurno.update({alquilado: false})
    this.state.comodin = 'P11'
  }

  render() {
  return (
      <View style={styles.reservaItem}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.nombreCancha}>{this.props.cancha}</Text>
            <Text>Fecha: {this.props.fecha}</Text>
            <Text>Hora: {this.props.horario}</Text>
            <Text>Precio: ${this.props.precio}</Text>
          </View>
          <View style={styles.icon}>
            <Icon
              name='close-circle'
              size={25}
              color='red'
              onPress={this.cancelarReserva}
            />
          </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    reservaItem: {
      width: '100%',
      padding: 10,
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderBottomColor: '#b5acb7',
      borderBottomWidth: 2,
      marginBottom: 10
    },
    nombreCancha: {
      fontSize: 17,
      fontWeight: 'bold'
    },
    icon: {
      right: 15,
      top: 15,
      position: 'absolute'
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
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Reserva);