import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import Images from '../Layout/images';

const size_proportion = Dimensions.get('window').height * 0.1;
const font_proportion = Dimensions.get('window').height * 0.05;

interface Props {
  metric: string;
  plate: number;
}

interface plateArray {
  metric: string;
  plates: { weight: number; image: ImageSourcePropType }[];
}

const plateImages: plateArray[] = [
  {
    metric: 'lb',
    plates: [
      { weight: 45, image: Images.lb[45] },
      { weight: 35, image: Images.lb[35] },
      { weight: 25, image: Images.lb[25] },
      { weight: 10, image: Images.lb[10] },
      { weight: 5, image: Images.lb[5] },
      { weight: 2.5, image: Images.lb[2.5] },
    ],
  },
  {
    metric: 'kg',
    plates: [
      { weight: 20, image: Images.kg[20] },
      { weight: 15, image: Images.kg[15] },
      { weight: 10, image: Images.kg[10] },
      { weight: 5, image: Images.kg[5] },
      { weight: 2.5, image: Images.kg[2.5] },
      { weight: 1.25, image: Images.kg[1.25] },
    ],
  },
];

const selectImage = (chosenMetric: string, plate: number) => {
  for (let plateImage of plateImages) {
    if (plateImage.metric == chosenMetric) {
      for (let plateWeight of plateImage.plates) {
        if (plateWeight.weight == plate) {
          return plateWeight.image;
        }
      }
    }
  }
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
