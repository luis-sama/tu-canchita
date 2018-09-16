import React, { Component } from 'react'
import { View } from 'react-native';

import CanchaDetalle from '../../Components/CanchaDetalle/CanchaDetalle';
import ListaCanchas from '../../Components/ListaCanchas/ListaCanchas';

class Busqueda extends Component {
  state = {
    canchas: [
      {id: 1, nombre: "La cancha de tu hermana", precio: "400", ubicacion: "La Plata", puntaje: "4", imagen: {uri: "https://www.elancasti.com.ar/u/fotografias/fotosnoticias/2018/8/30/146506.jpg"}},
      {id: 2, nombre: "Lo de roberto", precio: "350", ubicacion: "La Plata", puntaje: "2", imagen: {uri: "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_heroes-futbol-2.jpg"}},
      {id: 3, nombre: "Canchas luifa", precio: "1100", ubicacion: "La Plata", puntaje: "5", imagen: {uri: "http://www.catrielonline.com/fotos/pelota.jpg"}},
      {id: 4, nombre: "Mana", precio: "200", ubicacion: "La Plata", puntaje: "4", imagen: {uri: "https://www.elancasti.com.ar/u/fotografias/fotosnoticias/2018/8/30/146506.jpg"}},
      {id: 5, nombre: "Lobelto", precio: "150", ubicacion: "La Plata", puntaje: "2", imagen: {uri: "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_heroes-futbol-2.jpg"}},
      {id: 6, nombre: "Canchas Nacho", precio: "180", ubicacion: "La Plata", puntaje: "5", imagen: {uri: "http://www.catrielonline.com/fotos/pelota.jpg"}}
    ],
    canchaSeleccionada: null
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

  render() {
    return (
    <View>
      <CanchaDetalle 
        canchaSeleccionada={this.state.canchaSeleccionada}
        onModalClosed={this.modalClosedHandler}
      />
      <ListaCanchas 
        canchas={this.state.canchas}
        onItemSelected={this.canchaSeleccionadaHandler}
      />
    </View>
    )
  }
}

export default Busqueda;