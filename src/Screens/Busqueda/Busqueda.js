import React, { Component } from 'react'
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import CanchaDetalle from '../../Components/CanchaDetalle/CanchaDetalle';
import ListaCanchas from '../../Components/ListaCanchas/ListaCanchas';
import canchas from '../../json/canchas.json'

class Busqueda extends Component {
  state = {
    canchas,
    canchasFiltradas: [],
    canchaSeleccionada: null
  }

  componentDidMount () {
    this.setState({canchasFiltradas: this.state.canchas})
  }

  canchaSeleccionadaHandler  = id => {
    this.setState(prevState => {
      return {
        canchaSeleccionada: prevState.canchas.find(cancha => {
          return cancha.id == id; 
        })
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({canchaSeleccionada: null});
  }

  buscarCanchas = (nombre) => {
    this.setState({
      canchasFiltradas: this.state.canchas.filter(cancha => {
        return cancha.nombre.indexOf(nombre) > -1
      })
    })
  }

  render() {
    return (
    <View>
      <SearchBar
        lightTheme
        onChangeText={nombre => this.buscarCanchas(nombre)}
        onClearText={() => this.setState({canchas})}
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Buscar canchas...' 
      />
      <CanchaDetalle 
        canchaSeleccionada={this.state.canchaSeleccionada}
        onModalClosed={this.modalClosedHandler}
      />
      <ListaCanchas 
        canchas={this.state.canchasFiltradas}
        onItemSelected={this.canchaSeleccionadaHandler}
      />
    </View>
    )
  }
}

export default Busqueda;