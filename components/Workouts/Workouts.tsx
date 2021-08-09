import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, List } from 'react-native-paper';
import DayCard from './DayCard';

const nSuns5Day = [
  { dayNumber: 1, lifts: ['Bench Press', 'Barbell Row', 'Overhead Press'] },
  { dayNumber: 2, lifts: ['Squat, Sumo Deadlift'] },
  {
    dayNumber: 3,
    lifts: ['Overhead Press', 'Barbell Row', 'Incline Bench Press'],
  },
  { dayNumber: 4, lifts: ['Deadlift, Front Squat'] },
  { dayNumber: 5, lifts: ['Bench Press', 'Barbell Row', 'Close Grip Bench'] },
];

const Workouts = () => {
  const renderItem = ({ item }) => {
    console.log(item);
    <Text>{item.dayNumber}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={nSuns5Day} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cards: {
    width: 100,
  },
});
