import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import NavOrcamentos from '../rotas/NavOrcamentos'
import NavClientes from '../rotas/NavClientes'

const Drawer = createDrawerNavigator();

const Navegacao = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: 'Página Inicial' }} 
      />
      <Drawer.Screen
        name="NavClientes"
        component={NavClientes}
        options={{ title: 'Clientes' }} 
      />
      <Drawer.Screen
       name="NavOrcamentos" 
       component={NavOrcamentos}
       options={{ title: 'Orçamentos' }} />
    </Drawer.Navigator>
  );
};

export default Navegacao;
