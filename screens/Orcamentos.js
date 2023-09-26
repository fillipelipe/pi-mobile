import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Orcamentos = ({ navigation }) => {
  const [orcamentos, setOrcamentos] = useState([]); // Define um estado para armazenar os orçamentos

  // Simule a obtenção dos orçamentos, por exemplo, de uma API ou banco de dados
  useEffect(() => {
    // Aqui você pode buscar os dados dos orçamentos e definir o estado
    const dadosDosOrcamentos = [
      { id: '1', descricao: 'Orçamento 1' },
      { id: '2', descricao: 'Orçamento 2' },
      { id: '3', descricao: 'Orçamento 3' },
      // Adicione mais orçamentos aqui
    ];
    setOrcamentos(dadosDosOrcamentos);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Orçamentos</Text>
      <FlatList
        data={orcamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orcamentoItem}>
            <Text>{item.descricao}</Text>
          </View>
        )}
      />
    <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('NovoOrcamento')}
      />
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
  orcamentoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
   fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Orcamentos;