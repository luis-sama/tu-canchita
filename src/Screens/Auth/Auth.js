import React, {Component} from 'react';
import { StyleSheet, View, ImageBackground, Button, TextInput, Image } from 'react-native';
import Dimensions from 'Dimensions';
import startMainTabs from '../MainTabs/startMainTabs';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
<<<<<<< HEAD
import { AccessToken, LoginManager } from 'react-native-fbsdk';
||||||| merged common ancestors
import fbsdk, { LoginManager } from 'react-native-fbsdk';
=======
import fbsdk, { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { traerCanchas } from '../../store/actions/index';
>>>>>>> 3e6c1bebae102741ba8dac86a2d0cac3ef350487

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

  loginUsuarioYContraseñaHandler = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {startMainTabs()})
    .catch(error => {alert(error)})
  };

  loginConFacebookHandler = () => {
    LoginManager.logInWithReadPermissions(['public_profile'])
    .then(result => {
      if (result.isCancelled) {
        console.log('Cancelado')
        return Promise.reject(new Error('The user cancelled the request'));
      }
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
      return AccessToken.getCurrentAccessToken();
    })
    .then(data => {
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);      
      return firebase.auth().signInWithCredential(credential);
    })
    .then(currentUser => {
      console.log(`Facebook Login with user : ${JSON.stringify(currentUser.toJSON())}`);
      () => {startMainTabs()}
    })
    .catch(error => {
      console.log(`Login con facebook falló con error: ${error}`);
    })
  }

  // loginConFacebookHandler = () => {
  //   LoginManager.logInWithReadPermissions(['public_profile']).then(
  //     function(result) {
  //       if (result.isCancelled) {
  //         console.log('Login cancelled');
  //       } else {
  //         console.log('Login success with permissions: '
  //           +result.grantedPermissions.toString());
  //       }
  //     },
  //     function(error) {
  //       console.log('Login fail with error: ' + error);
  //     }
  //   );
  // }

  loginConGoogleHandler = () => {
    this.props.canchas.map(cancha => {
        alert(`La cancha ${cancha.id} tiene: ${cancha.turnos.length} turnos`)
      })
    }

  signuphandler = () => {
    this.props.navigator.push({
      screen: 'miApp.SignUpScreen',
    });
  }

  render() {
    return (
      <ImageBackground source={require('../../Imagenes/canchita.jpg')} style={styles.fondo}>
        <Image source={require('../../Imagenes/logo.png')}/>
        <View style={styles.formulario}>
          <TextInput 
            style={styles.input} 
            placeholder="Email"
            onChangeText={email => this.setState({email})}  
          >
          </TextInput>
          <TextInput 
            style={styles.input} secureTextEntry={true} 
            placeholder="Contraseña"
            onChangeText={password => this.setState({password})}
          >
          </TextInput>
          <View style={{marginBottom: 10, marginTop: 10}}>
            <Button 
              title='Iniciá sesión' 
              onPress={() => this.loginUsuarioYContraseñaHandler(this.state.email, this.state.password)} 
              style={{flex:1}}
            />
          </View>
          <Button title='Creá una cuenta' onPress={this.signuphandler} style={{flex:1}}/>
        </View>
        <View style={{marginTop: 70}}>
          <Icon.Button 
            name="facebook-box" 
            backgroundColor="#3b5998" 
            onPress={this.loginConFacebookHandler}
          >
            Ingresá con Facebook
          </Icon.Button>
        </View>
        <View style={{marginTop: 10}}>
          <Icon.Button name="google-plus" backgroundColor="red" onPress={this.loginConGoogleHandler}>
            Ingresá con Google
          </Icon.Button>
        </View>
      </ImageBackground>
    );
  }
}


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