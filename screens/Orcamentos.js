import React from 'react';
import { View, Text, Button } from 'react-native';
import FAB from 'react-native-fab';

const Orcamentos = ({ navigation }) => {
  return (
    <View>
      <Text>Orçamentos:</Text>
      {/* Seus orçamentos exibidos aqui */}

      <FAB
        buttonColor="#213555"
        iconTextColor="white"
        onClickAction={() => {
          navigation.navigate('NovoOrcamento');
        }}
      />
    </View>
  );
};

export default Orcamentos;