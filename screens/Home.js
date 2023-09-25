import React from 'react';
import { View, StyleSheet } from 'react-native';
import FinanceSummary from '../components/FinanceSummary';
import Shortcuts from '../components/Shortcuts';
import RecentBudgets from '../components/RecentBudgets';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Container para 'Finanças do Mês' */}
      <View style={styles.financesContainer}>
        <FinanceSummary saldo={500.0} entradas={1500.0} saidas={1000.0} />
      </View>

      {/* Container para 'Atalhos' */}
      <View style={styles.shortcutsContainer}>
        <Shortcuts />
      </View>

      {/* Container para 'Últimos Orçamentos' */}
      <View style={styles.recentBudgetsContainer}>
        <RecentBudgets budgetList/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    padding: 16,
  }
});

export default Home;
