import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Workouts from '../components/Workouts/Workouts';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Workouts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
