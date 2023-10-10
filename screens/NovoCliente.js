import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import VoltarOrcamentos from '../components/VoltarOrcamentos';
import VoltarClientes from '../components/VoltarClientes';

const NovoCliente = () => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');

  const adicionarCliente = () => {
    // Aqui você pode adicionar o novo cliente à lista de clientes do usuário (estado ou API).
    // Certifique-se de que os dados sejam validados e tratados adequadamente.

    // Depois de adicionar o cliente, você pode navegar de volta para a tela de "Clientes".
  };

  return (
    <View style={styles.container}>
      <VoltarClientes />
      <View style={styles.containerOrc}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nome do Cliente"
            value={nomeCliente}
            onChangeText={(text) => setNomeCliente(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="CPF"
            value={cpf}
            onChangeText={(text) => setCPF(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="RG"
            value={rg}
            onChangeText={(text) => setRG(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Telefone"
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="CEP"
            value={cep}
            onChangeText={(text) => setCEP(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Endereço"
            value={endereco}
            onChangeText={(text) => setEndereco(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Número da Casa"
            value={numeroCasa}
            onChangeText={(text) => setNumeroCasa(text)}
            style={styles.input}
          />
        </View>
        <Button title="Adicionar Cliente" onPress={adicionarCliente} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerOrc: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
});

export default NovoCliente;
