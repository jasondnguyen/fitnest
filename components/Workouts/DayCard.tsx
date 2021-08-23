import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { string } from 'yargs';

const height_proportion = Dimensions.get('window').height * 0.12;
const margin_proprotion = Dimensions.get('window').height * 0.04;

interface Day {
  dayNumber: number;
  lifts: string[];
}

const DayCard = ({ dayNumber, lifts }: Day) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>Day {dayNumber}</Title>
        <Paragraph>{lifts.join(', ')}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default DayCard;

const styles = StyleSheet.create({
  card: {
    marginTop: margin_proprotion,
    height: height_proportion,
  },
});
