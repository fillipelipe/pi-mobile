import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinanceSummary = ({ saldo, entradas, saidas }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Finanças do Mês</Text>
      <View style={styles.financesContainer}>
        <View style={styles.financesRow}>
          <Text style={styles.label}>Saldo:</Text>
          <Text style={styles.saldoValue}>R$ {saldo.toFixed(2)}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.financesRow}>
          <Text style={styles.label}>Entradas:</Text>
          <Text style={styles.entradasValue}>R$ {entradas.toFixed(2)}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.financesRow}>
          <Text style={styles.label}>Saídas:</Text>
          <Text style={styles.saidasValue}>R$ {saidas.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  financesContainer: {
    marginTop: 16,
  },
  financesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
  },
  saldoValue: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'right',
  },
  entradasValue: {
    fontSize: 16,
    color: 'green',
    textAlign: 'right',
  },
  saidasValue: {
    fontSize: 16,
    color: 'red',
    textAlign: 'right',
  },
  divider: {
    borderBottomColor: '#ddd', // Cor da linha de divisão
    borderBottomWidth: 1, // Largura da linha de divisão
    marginVertical: 8, // Espaçamento vertical
  },
});

export default FinanceSummary;