import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navegacao from './rotas/Navegacao';

const App = () => {
  return (
    <NavigationContainer>
      <Navegacao />
    </NavigationContainer>
  );
}

export default App;
