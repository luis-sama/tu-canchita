import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Turno = props => (
  <View style={styles.turnoContainer}>
    <Text>{props.horario}</Text>
  </View>
);

styles = StyleSheet.create({
  turnoContainer: {
    margin: 3,
    padding: 5,
    backgroundColor: "#99B998",
    width: "100%"
  }
});

export default Turno;