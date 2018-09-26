import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

class Perfil extends Component {
  render() {
    return (
      <View style={styles.fondo}>
          <Avatar
            size="xlarge"
            rounded
            //source={{uri: "https://www.patchcollection.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/s/p/spiderman_extra_large_logo.jpg"}}
            title="LU"
          />
          <Text>Luis Urán</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 10,
    alignItems: 'center',
  }
});

export default Perfil;