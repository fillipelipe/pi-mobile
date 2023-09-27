import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FAB, Avatar } from 'react-native-paper';

const Clientes = ({ navigation }) => {
  const clientes = [
    { id: '1', nome: 'Cliente C' },
    { id: '2', nome: 'Cliente A' },
    { id: '3', nome: 'Cliente B' },
    // Adicione mais clientes aqui
  ];

  // Ordenar os clientes em ordem alfabética
  clientes.sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Clientes</Text>
        <FlatList
          data={clientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.clienteItem}>
              <View style={styles.label}>
                <Avatar.Text
                  size={48}
                  label={item.nome[0]}
                  style={{ backgroundColor: 'blue' }}
                  labelStyle={{ fontSize: 24, color: 'white' }}
                />
                <Text style={styles.clienteNome}>{item.nome}</Text>
              </View>
            </View>
          )}
        />
        <FAB
          theme={{ colors: { primary: 'green' } }}
          style={styles.fab}
          icon="plus"
          color="red"
          onPress={() => navigation.navigate('NovoCliente')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
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
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8C8C8C',
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  clienteNome: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
});

export default Clientes;
