import React from 'react';
import { View, StyleSheet } from 'react-native';
import FinanceSummary from '../components/FinanceSummary';
import Shortcuts from '../components/Shortcuts';
import RecentBudgets from '../components/RecentBudgets';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <View style={styles.container}>
      <Menu/>
      {/*
      <View style={styles.financesContainer}>
        <FinanceSummary saldo={500.0} entradas={1500.0} saidas={1000.0} />
      </View>

      
      <View style={styles.shortcutsContainer}>
        <Shortcuts />
      </View>

      */}
      <View>
        <RecentBudgets budgetList/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  }
});

export default Home;
