// NovoClienteScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NovoCliente = () => {
  const [nomeCliente, setNomeCliente] = useState('');

  const adicionarCliente = () => {
    // Aqui você pode adicionar o novo cliente à lista de clientes do usuário (estado ou API).
    // Certifique-se de que os dados sejam validados e tratados adequadamente.

    // Depois de adicionar o cliente, você pode navegar de volta para a tela de "Clientes".
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Cliente</Text>
      <TextInput
        placeholder="Nome do Cliente"
        value={nomeCliente}
        onChangeText={(text) => setNomeCliente(text)}
        style={styles.input}
      />
      <Button title="Adicionar Cliente" onPress={adicionarCliente} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default NovoCliente;
