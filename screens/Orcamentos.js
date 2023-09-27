import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Orcamentos = ({ navigation }) => {
  const [orcamentos, setOrcamentos] = useState([]);
  const [proximoNumero, setProximoNumero] = useState(1);

  useEffect(() => {
    const dadosDosOrcamentos = [
      { id: '1', numero: 1, data: '2023-09-25', cliente: 'Cliente A' },
      { id: '2', numero: 2, data: '2023-09-26', cliente: 'Cliente B' },
      { id: '3', numero: 3, data: '2023-09-27', cliente: 'Cliente C' },
    ];
    setOrcamentos(dadosDosOrcamentos);
    const numeros = dadosDosOrcamentos.map((orcamento) => orcamento.numero);
    const maxNumero = Math.max(...numeros);
    setProximoNumero(maxNumero + 1);
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Orçamentos</Text>
        <FlatList
          data={orcamentos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orcamentoItem}>
              <View style={styles.label}>
                <Text style={styles.orcamentoText}>N°{item.numero.toString().padStart(2, '0')}</Text>
                <Text style={styles.orcamentoText}>Data: {item.data}</Text>
                <Text style={styles.orcamentoText}>Cliente: {item.cliente}</Text>
              </View>
            </View>
          )}
        />
        <FAB
          style={styles.fab}
          icon="plus"
          color="red"
          onPress={() =>
            navigation.navigate('NovoOrcamento', {
              proximoNumero: proximoNumero,
            })
          }
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
  orcamentoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  orcamentoText: {
    fontSize: 16,
    color: 'white',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
});

export default Orcamentos;
