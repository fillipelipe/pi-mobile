import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Shortcuts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Atalhos</Text>
      <View style={styles.shortcuts}>
        <TouchableOpacity style={styles.shortcutButton}>
          <Text style={styles.shortcutText}>Novo Orçamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shortcutButton}>
          <Text style={styles.shortcutText}>Nova Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shortcutButton}>
          <Text style={styles.shortcutText}>Nova Saída</Text>
        </TouchableOpacity>
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
  shortcuts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  shortcutButton: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    margin: 8,
    borderWidth: 1,          // Adiciona borda
    borderColor: '#213555', // Cor da borda (pode ser ajustada)
  },
  shortcutText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Shortcuts;
