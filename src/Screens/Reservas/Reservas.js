import React, { Component } from 'react'
import { Button, Modal, View, Text, TouchableHighlight } from 'react-native';

export default class Reservas extends Component {
  state = {
    modalVisible: false,
    horarios: ['08 - 09', '09 - 10', '10 - 11', '11 - 12']
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const listaCanchas = this.state.horarios.map((cancha,i) => {
      return (
        <Text key={i}>{cancha}</Text>
      )
    })
    return (
      <View style={{marginTop: 22, backgroundColor:'red'}}>
        <Modal
          presentationStyle='overFullScreen'
          transparent={false}
          style={{width:70}}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, borderWidth: 5, width:200}}>
            <View>
              {listaCanchas}

              <Button
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                title='Cerrar el modal'
              />
            </View>
          </View>
        </Modal>

        <Button
          onPress={() => this.setModalVisible(true)}
          title='Mostrar el modal'
        />
      </View>
    );
  }
}