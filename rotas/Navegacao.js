import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Orcamento from '../screens/Orcamentos';
import Clientes from '../screens/Clientes';
import NovoOrcamento from '../screens/NovoOrcamento'
import NovoCliente from '../screens/NovoCliente';

const Drawer = createDrawerNavigator();

const Navegacao = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: 'Página Inicial' }} // Título com espaços
      />
      <Drawer.Screen
        name="Orçamentos"
        component={Orcamento}
        options={{ title: 'Orçamentos' }} // Título com espaços
      />
      <Drawer.Screen
        name="Clientes"
        component={Clientes}
        options={{ title: 'Clientes' }} // Título com espaços
      />
      <Drawer.Screen
        name="NovoOrcamento"
        component={NovoOrcamento}
        options={{ title: 'Novo Orçamento'}} // Título com espaços
      />
      <Drawer.Screen
        name="NovoCliente"
        component={NovoCliente}
        options={{ title: 'Novo Cliente'}} // Título com espaços
      />
    </Drawer.Navigator>
  );
};

export default Navegacao;
