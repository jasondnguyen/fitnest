import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { string } from 'yargs';

const DayCard = ({ dayNumber, lifts }) => {
  console.log(dayNumber);
  console.log(lifts);

  return (
    <Card>
      <Card.Content>
        <Title>{dayNumber}</Title>
        <Paragraph>{lifts.join(', ')}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default DayCard;
