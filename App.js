import {Navigation} from 'react-native-navigation';
import Auth from './src/Screens/Auth/Auth';
import Perfil from './src/Screens/Perfil/Perfil';
import Busqueda from './src/Screens/Busqueda/Busqueda';
import SignUp from './src/Screens/SignUp/SignUp';
import Reservas from './src/Screens/Reservas/Reservas';

// Registrar ventanas
Navigation.registerComponent("miApp.AuthScreen", () => Auth);
Navigation.registerComponent("miApp.SignUpScreen", () => SignUp);
Navigation.registerComponent("miApp.PerfilScreen", () => Perfil);
Navigation.registerComponent("miApp.BusquedaScreen", () => Busqueda);
Navigation.registerComponent("miApp.ReservasScreen", () => Reservas);

// Empezar la app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'miApp.AuthScreen',
  },
  animationType: 'none'
});