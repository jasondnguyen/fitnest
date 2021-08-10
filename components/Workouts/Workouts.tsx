import * as React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
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
  const renderItem = ({
    item,
  }: {
    item: { dayNumber: number; lifts: string[] };
  }) => <DayCard dayNumber={item.dayNumber} lifts={item.lifts}></DayCard>;

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
});
