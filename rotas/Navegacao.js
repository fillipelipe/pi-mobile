import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Orcamento from '../screens/Orcamentos';

const Drawer = createDrawerNavigator();

const Navegacao = () => {
  return (
    <Drawer.Navigator initalRouteName = "Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Orçamentos" component={Orcamento} />
    </Drawer.Navigator>
  );
};

export default Navegacao;