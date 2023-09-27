import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecentBudgets = ({ budgetList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Últimos Orçamentos</Text>
      <View style={styles.recentBudgets}>
        {/* Inclua aqui a lista dos últimos orçamentos */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    padding: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#F2F2F2'
  },
  recentBudgets: {
    marginTop: 16,
  },
});

export default RecentBudgets;
