import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import PlateCalculator from '../components/PlateCalculator/PlateCalculator';

export default function PlateCalculatorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PlateCalculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
