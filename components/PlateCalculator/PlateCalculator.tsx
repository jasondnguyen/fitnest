import * as React from 'react';
import { TextInput, ToggleButton, Button } from 'react-native-paper';
import { StyleSheet, Alert } from 'react-native';
import { View } from '../Themed';

const width_proportion = '80%';

const calculateTotalPlates = (weight: number, metric: string) => {
  try {
    if (weight % 5 != 0) {
      Alert.alert('Error', 'Please enter a valid weight');
    }

    const plates: { [key: string]: Array<number> } = {
      lb: [45, 35, 25, 10, 5, 2.5],
      kg: [25, 20, 15, 10, 5, 2.5],
    };

    const neededPlates: Array<Object> = [{ bar: 1 }];

    weight -= 45;

    for (let plate of plates[metric]) {
      const neededPlate = Math.floor(weight / plate);
      neededPlates.push({ [`${plate}`]: neededPlate });
      weight -= neededPlate * plate;
    }

    return neededPlates;
  } catch (err) {
    console.log(err);
  }
};

const PlateCalculator = () => {
  const [weight, setWeight] = React.useState('');
  const [metric, setMetric] = React.useState('lb');

  return (
    <View style={styles.root}>
      <TextInput
        label='Weight'
        value={weight}
        onChangeText={text => setWeight(text)}
        placeholder='145'
        style={styles.weightInput}
      />
      <ToggleButton.Row
        onValueChange={chosenMetric => setMetric(chosenMetric)}
        value={metric}
        style={styles.weightRow}
      >
        <ToggleButton icon='weight-pound' value='lb' />
        <ToggleButton icon='weight-kilogram' value='kg' />
      </ToggleButton.Row>
      <Button
        mode='contained'
        onPress={() => calculateTotalPlates(parseInt(weight), metric)}
      >
        Calculate Plates
      </Button>
    </View>
  );
};

export default PlateCalculator;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  weightInput: {
    width: width_proportion,
    height: 43,
  },
  weightRow: {
    left: width_proportion,
    position: 'absolute',
  },
});
