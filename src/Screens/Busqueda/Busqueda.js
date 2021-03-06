import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import CanchaDetalle from '../../Components/CanchaDetalle/CanchaDetalle';
import ListaCanchas from '../../Components/ListaCanchas/ListaCanchas';
import { connect } from 'react-redux';
import { seleccionarCancha, ocultarModalCancha, buscarCancha, cargarCanchasFiltradas, traerCanchas, buscarCanchaPrecio } from '../../store/actions/index';

class Busqueda extends Component {

  canchaSeleccionadaHandler = id => {
    this.props.seleccionarCancha(id)
  }

  modalClosedHandler = () => {
    this.props.ocultarModalCancha()
  }

  buscarCanchas = nombre => {
    this.props.buscarCancha(nombre);
  }

  buscarCanchasPrecio = precio => {
    this.props.buscarCanchaPrecio(precio);
  }

  componentDidMount() {
    this.props.cargarCanchasFiltradas()
  }


  render() {
    return (
    <View>
      <SearchBar
        lightTheme
        onChangeText={nombre => this.buscarCanchas(nombre)}
        // onClearText={() => {}}
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Buscar por nombre...' 
      />
      <SearchBar
        lightTheme
        onChangeText={precio => this.buscarCanchasPrecio(precio)}
        // onClearText={() => {}}
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Buscar por precio...' 
      />
      <CanchaDetalle 
        canchaSeleccionada={this.props.canchaSeleccionada}
        onModalClosed={this.modalClosedHandler}
      />
      <ListaCanchas 
        canchas={this.props.canchasFiltradas}
        onItemSelected={this.canchaSeleccionadaHandler}
      />
    </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    //comolollamo: state.(configurestore).(reducers/root.js)
    canchas: state.canchas.canchas,
    canchasFiltradas: state.canchas.canchasFiltradas,
    canchaSeleccionada: state.canchas.canchaSeleccionada
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //comolollamo: () => dispatch(actions/index.js)
    seleccionarCancha: id => dispatch(seleccionarCancha(id)),
    ocultarModalCancha: () => dispatch(ocultarModalCancha()),
    buscarCancha: nombre => dispatch(buscarCancha(nombre)),
    cargarCanchasFiltradas: () => dispatch(cargarCanchasFiltradas()),
    buscarCanchaPrecio: precio => dispatch(buscarCanchaPrecio(precio)),
    traerCanchas: () => dispatch(traerCanchas()),
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);