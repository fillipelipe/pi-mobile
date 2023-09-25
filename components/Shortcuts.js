import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Shortcuts = () => {
  const buttonWidth = (Dimensions.get('window').width - 64) / 3; // Divide o espaço disponível igualmente para os 3 botões

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Atalhos</Text>
      <View style={styles.shortcuts}>
        <TouchableOpacity style={[styles.shortcutButton, { width: buttonWidth }]}>
          <Text style={[styles.shortcutText, { fontSize: buttonWidth * 0.2 }]}>
            Novo Orçamento
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.shortcutButton, { width: buttonWidth }]}>
          <Text style={[styles.shortcutText, { fontSize: buttonWidth * 0.2 }]}>
            Nova Entrada
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.shortcutButton, { width: buttonWidth }]}>
          <Text style={[styles.shortcutText, { fontSize: buttonWidth * 0.2 }]}>
            Nova Saída
          </Text>
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
    borderWidth: 1,
    borderColor: '#213555',
  },
  shortcutText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Shortcuts;
