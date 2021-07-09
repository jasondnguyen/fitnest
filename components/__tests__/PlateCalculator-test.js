import * as React from 'react';
import renderer from 'react-test-renderer';

import PlateCalculator from '../PlateCalculator/PlateCalculator';
import calculateTotalPlates from '../PlateCalculator/CalculatorLogic';

it(`renders correctly`, () => {
  const calculator = renderer
    .create(<PlateCalculator>Snapshot test!</PlateCalculator>)
    .toJSON();

  expect(calculator).toMatchSnapshot();
});

it('calculates correct plates in pounds', () => {
  expect(calculateTotalPlates(135, 'lb')).toBe([
    { bar: 1 },
    { 45: 2 },
    { 35: 0 },
    { 25: 0 },
    { 10: 0 },
    { 5: 0 },
    { 2.5: 0 },
  ]);
});
