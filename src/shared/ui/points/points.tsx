import React from 'react';
import {View} from 'react-native';
import {GridStyles} from '../../theme/grid.styles';
import {PointStyles} from './points.styles';

const Points: React.FC = ({onboardingNumber}) => {
  return (
    <View
      style={[
        GridStyles.flexRow,
        GridStyles.gridGap(8),
        GridStyles.alignItemsCenter,
        GridStyles.justifyCenter,
      ]}>
      <View
        style={
          onboardingNumber === 2
            ? PointStyles.activePoint(true)
            : PointStyles.activePoint(false)
        }></View>
      <View
        style={
          onboardingNumber === 3
            ? PointStyles.activePoint(true)
            : PointStyles.activePoint(false)
        }></View>
      <View style={PointStyles.activePoint(false)}></View>
    </View>
  );
};

export default Points;
