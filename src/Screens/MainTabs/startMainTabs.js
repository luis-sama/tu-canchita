import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "miApp.BusquedaScreen",
                label: "Búsqueda",
                title: "Busqueda",
                icon: require('../../Imagenes/logo.png')
            },
            {
                screen: "miApp.ReservasScreen",
                label: "Reservas",
                title: "Mis reservas",
                icon: require('../../Imagenes/logo.png')
            },
            {
                screen: "miApp.PerfilScreen",
                label: "Perfil",
                title: "Perfil",
                icon: require('../../Imagenes/logo.png')
            },
        ]
    });
};

export default startTabs;