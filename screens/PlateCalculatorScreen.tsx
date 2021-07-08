import * as React from 'react';
import { StyleSheet } from 'react-native';
import PlateCalculator from '../components/PlateCalculator/PlateCalculator';

import { Text, View } from '../components/Themed';

export default function PlateCalculatorScreen() {
  return (
    <View style={styles.container}>
      <PlateCalculator />
    </View>
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
