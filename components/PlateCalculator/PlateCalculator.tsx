import * as React from 'react';
import { TextInput, ToggleButton, Button } from 'react-native-paper';
import { StyleSheet, Alert, Dimensions, View } from 'react-native';
import PlateDisplay from './PlateDisplay';

const width_proportion = '80%';
const icon_proportion = Dimensions.get('window').width * 0.1;

const calculateTotalPlates = (weight: number, metric: string) => {
  try {
    if (weight % 5 != 0 || weight < 45) {
      Alert.alert('Error', 'Please enter a valid weight');
    }

    const plates: { [key: string]: Array<number> } = {
      lb: [45, 35, 25, 10, 5, 2.5],
      kg: [20, 15, 10, 5, 2.5, 1.25],
    };

    const neededPlates: Array<Object> = [];
    weight = (weight - 45) / 2;

    for (let plate of plates[metric]) {
      const neededPlate = Math.floor(weight / plate);
      neededPlates.push({ [`${plate}`]: neededPlate * 2 });
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
  const [plates, setPlates] = React.useState([] as any);

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
        onValueChange={chosenMetric => {
          if (chosenMetric) {
            setMetric(chosenMetric);
            if (chosenMetric !== metric) {
              setPlates([]);
            }
          }
        }}
        value={metric}
        style={styles.weightRow}
      >
        <ToggleButton
          icon='weight-pound'
          value='lb'
          style={{ width: icon_proportion }}
        />
        <ToggleButton
          icon='weight-kilogram'
          value='kg'
          style={{ width: icon_proportion }}
        />
      </ToggleButton.Row>
      <Button
        mode='contained'
        onPress={() =>
          setPlates(calculateTotalPlates(parseInt(weight), metric))
        }
      >
        Calculate Plates
      </Button>
      {plates &&
        plates.map((plate: Object, index: number) => (
          <PlateDisplay key={index} plate={plate} metric={metric} />
        ))}
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
    height: 44,
  },
  weightRow: {
    left: width_proportion,
    position: 'absolute',
  },
});
