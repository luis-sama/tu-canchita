import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import CanchaDetalle from '../../Components/CanchaDetalle/CanchaDetalle';
import ListaCanchas from '../../Components/ListaCanchas/ListaCanchas';
import { connect } from 'react-redux';
import { seleccionarCancha, ocultarModalCancha, buscarCancha, cargarCanchasFiltradas, traerCanchas } from '../../store/actions/index';

class Busqueda extends Component {

  state = {
    checked: false,
    precioMin: 0,
    precioMax: 99999
  }

  canchaSeleccionadaHandler = id => {
    this.props.seleccionarCancha(id)
  }

  modalClosedHandler = () => {
    this.props.ocultarModalCancha()
  }

  buscarCanchas = nombre => {
      this.props.buscarCancha(nombre);
    }

  componentDidMount() {
    const { precioMin, precioMax } = this.state;
    this.props.cargarCanchasFiltradas(precioMin, precioMax)
  }

  filtrarPrecio = (precioMin, precioMax) => {
    if (precioMin > precioMax) {
      alert("El precio mínimo no puede ser superior al precio máximo.")  
    } 
    else {
      this.props.cargarCanchasFiltradas(precioMin, precioMax)
    }
    this.textInputMin.clear()
    this.textInputMax.clear()
  }

  render() {
    return (
    <View>
      <SearchBar
        lightTheme
        onChangeText={nombre => this.buscarCanchas(nombre)}
        // onClearText={() => {}}
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Buscar canchas...' 
      />
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <TextInput
          ref={inputMin => { this.textInputMin = inputMin }}
          placeholder="Precio mínimo"
          style={{width: 100}}
          onChangeText={precioMin => this.setState({precioMin})}
        />
        <TextInput
        ref={inputMax => { this.textInputMax = inputMax }}
          placeholder="Precio máximo"
          style={{width: 100}}
          onChangeText={precioMax => this.setState({precioMax})}
        />
        <View style={{marginLeft: 15, height: 40}}>
          <Button title="Ir" onPress={() => this.filtrarPrecio(this.state.precioMin, this.state.precioMax)}/>
        </View>  
      </View>     
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
    cargarCanchasFiltradas: (precioMin, precioMax) => dispatch(cargarCanchasFiltradas(precioMin, precioMax)),
    traerCanchas: () => dispatch(traerCanchas()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);