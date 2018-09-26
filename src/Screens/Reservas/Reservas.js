import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import ListaReservas from '../../Components/ListaReservas/ListaReservas';
import { connect } from 'react-redux';

class Reservas extends Component {
  render() {
    
    return (
      // <ListaReservas
      //   reservas={}
      // />
      <ScrollView/>
    )
  }
}

const mapStateToProps = state => {
  return {
    canchas: state.canchas.canchas,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservas);