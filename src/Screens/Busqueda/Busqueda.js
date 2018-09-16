import React, { Component } from 'react'
import { ScrollView, Modal } from 'react-native';

import Cancha from '../../Components/Cancha/Cancha';

class Busqueda extends Component {
  state = {
    canchas: [
      {nombre: "La cancha de tu hermana", precio: "400", ubicacion: "La Plata", puntaje: "4", imagen: {uri: "https://www.elancasti.com.ar/u/fotografias/fotosnoticias/2018/8/30/146506.jpg"}},
      {nombre: "Lo de roberto", precio: "350", ubicacion: "La Plata", puntaje: "2", imagen: {uri: "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_heroes-futbol-2.jpg"}},
      {nombre: "Canchas luifa", precio: "1100", ubicacion: "La Plata", puntaje: "5", imagen: {uri: "http://www.catrielonline.com/fotos/pelota.jpg"}},
      {nombre: "Mana", precio: "200", ubicacion: "La Plata", puntaje: "4", imagen: {uri: "https://www.elancasti.com.ar/u/fotografias/fotosnoticias/2018/8/30/146506.jpg"}},
      {nombre: "Lobelto", precio: "150", ubicacion: "La Plata", puntaje: "2", imagen: {uri: "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_heroes-futbol-2.jpg"}},
      {nombre: "Canchas Nacho", precio: "180", ubicacion: "La Plata", puntaje: "5", imagen: {uri: "http://www.catrielonline.com/fotos/pelota.jpg"}}
    ],
  }

  render() {
    const listaCanchas = this.state.canchas.map((cancha,i) => {
      return (
        <Cancha 
          nombre={cancha.nombre}
          precio={cancha.precio}
          ubicacion={cancha.ubicacion}
          puntaje={cancha.puntaje}
          imagen={cancha.imagen}
          key={i} 
        />
      )
    })
    return (
    <ScrollView>
      {listaCanchas}
    </ScrollView>
    )
  }
}

export default Busqueda;