import React, {Component} from 'react';
import { StyleSheet, View, ImageBackground, Button, TextInput, Image } from 'react-native';
import Dimensions from 'Dimensions';
import startMainTabs from '../MainTabs/startMainTabs';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { traerCanchas } from '../../store/actions/index';

const ANCHO_PANTALLA = Dimensions.get('window').width;

class Auth extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    email: "",
    password: ""
  }
  
  async componentDidMount() {
    var dbCanchas = firebase.database().ref().child('canchas');
    dbCanchas.on('child_added', data => {
      let turnoAdd = [];
      var dbTurnos = firebase.database().ref().child(`canchas/${data.key}`).child('turnos');
      dbTurnos.on('child_added', turno => {
        turnoAdd = [...turnoAdd, {
          id: turno.key,
          fecha: turno.val().fecha, 
          horario: turno.val().horario, 
          alquilado: turno.val().alquilado
          }]
        })
      this.props.canchas.push({
        id: data.key,
        nombre: data.val().nombre,
        imagen: data.val().imagen,
        precio: data.val().precio,
        puntaje: data.val().puntaje,
        turnos: turnoAdd,
        ubicacion: data.val().ubicacion
      })
    })
  }

  facebookLogin = async () =>{
    LoginManager.logInWithReadPermissions(['public_profile']).then(
       function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <ImageBackground source={require('../../Imagenes/canchita.jpg')} style={styles.fondo}>
        <View style={{marginTop: 70}}>
          <Icon.Button 
            name="facebook-box" 
            backgroundColor="#3b5998" 
            onPress={this.facebookLogin}
          >
            Ingresá con Facebook
          </Icon.Button>
        </View>
      </ImageBackground>
    );
  }
};


const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formulario: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: ANCHO_PANTALLA - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 25,
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    margin: 15
  }
})

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
    traerCanchas: () => dispatch(traerCanchas()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);