import * as React from 'react';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import Images from '../Layout/images';

const size_proportion = Dimensions.get('window').height * 0.1;
const font_proportion = Dimensions.get('window').height * 0.05;

interface Props {
  metric: string;
  plate: Object;
}

const selectImage = (metric: string, plate: number) => {
  const plateArray = {
    lb: {
      45: Images.lb[45],
      35: Images.lb[35],
      25: Images.lb[25],
      10: Images.lb[10],
      5: Images.lb[5],
      2.5: Images.lb[2.5],
    },
    kg: {
      20: Images.kg[20],
      15: Images.kg[15],
      10: Images.kg[10],
      5: Images.kg[5],
      2.5: Images.kg[2.5],
      1.25: Images.kg[1.25],
    },
  };

  return plateArray[metric][plate];
};

const PlateDisplay: React.FC<Props> = ({ metric, plate }) => {
  const plateValue = Object.keys(plate)[0];
  const plateAmount = Object.values(plate)[0];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: font_proportion }}>
        <Image
          source={selectImage(metric, plateValue)}
          style={{ height: size_proportion, width: size_proportion }}
        />
        x{plateAmount}
      </Text>
    </View>
  );
};

export default PlateDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
