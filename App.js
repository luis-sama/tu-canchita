import {Navigation} from 'react-native-navigation';
import Auth from './src/Screens/Auth/Auth';
import Perfil from './src/Screens/Perfil/Perfil';
import Busqueda from './src/Screens/Busqueda/Busqueda';
import SignUp from './src/Screens/SignUp/SignUp';
import Reservas from './src/Screens/Reservas/Reservas';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import firebase from 'firebase';

const firebaseConfig = {
  // apiKey: "AIzaSyCBOrFJqatsgzm0kvT87liAqxBkfcy7TcA",
  apiKey: 'AIzaSyAwC_LjaKA4kZydmdCzussDJy6hYW0g1rQ',
  authDomain: "tu-canchita.firebaseapp.com",
  databaseURL: "https://tu-canchita.firebaseio.com",
  projectId: "tu-canchita",
  storageBucket: "tu-canchita.appspot.com",
  messagingSenderId: "847113784299"
};
firebase.initializeApp(firebaseConfig);

const store = configureStore();

// Registrar ventanas
Navigation.registerComponent("miApp.AuthScreen", () => Auth, store, Provider);
Navigation.registerComponent("miApp.SignUpScreen", () => SignUp, store, Provider);
Navigation.registerComponent("miApp.PerfilScreen", () => Perfil, store, Provider);
Navigation.registerComponent("miApp.BusquedaScreen", () => Busqueda, store, Provider);
Navigation.registerComponent("miApp.ReservasScreen", () => Reservas, store, Provider);

// Empezar la app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'miApp.AuthScreen',
  },
  animationType: 'none'
});