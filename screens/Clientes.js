import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FAB, Card, Title, Avatar } from 'react-native-paper';
import MenuClientes from '../components/MenuClientes.js';

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
      <MenuClientes />
      <View style={styles.clientesContainer}>
        <Text style={styles.title}>Lista de Clientes</Text>
        <FlatList
          data={clientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.clienteCard}>
              <Card.Content style={styles.cardContent}>
                <Avatar.Text size={48} label={item.nome[0]} style={styles.avatar} />
                <Title style={styles.clienteNome}>{item.nome}</Title>
              </Card.Content>
            </Card>
          )}
        />
      </View>
      <FAB
        theme={{ colors: { primary: 'green' } }}
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('NovoCliente')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  clientesContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  clienteCard: {
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  clienteNome: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Clientes;
