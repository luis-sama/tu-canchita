import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("search", 30),
        Icon.getImageSource("calendar_today", 30),
        Icon.getImageSource("person", 30)
    ]).then( iconos => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "miApp.BusquedaScreen",
                    label: "Búsqueda",
                    title: "Busqueda",
                    icon: iconos[0]
                },
                {
                    screen: "miApp.ReservasScreen",
                    label: "Reservas",
                    title: "Mis reservas",
                    icon: iconos[1]
                },
                {
                    screen: "miApp.PerfilScreen",
                    label: "Perfil",
                    title: "Perfil",
                    icon: iconos[2]
                },
            ]
        });
    })
    
    
};

export default startTabs;