// Clientes.js

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';


const Clientes = ({ navigation }) => {
  // Aqui você pode obter a lista de clientes do usuário, por exemplo, de um estado ou de uma API.
  const clientes = [
    { id: '1', nome: 'Cliente C' },
    { id: '2', nome: 'Cliente A' },
    { id: '3', nome: 'Cliente B' },
    // Adicione mais clientes aqui
  ];

  // Ordenar os clientes em ordem alfabética
  clientes.sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes</Text>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clienteItem}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
      <FAB theme={{ colors: { primary: 'green' } }} 
        style={styles.fab}
        icon="plus"
        color="red"
        onPress={() => navigation.navigate('NovoCliente')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: '#F2F2F2',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  clienteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#8C8C8C'
  },
});

export default Clientes;
