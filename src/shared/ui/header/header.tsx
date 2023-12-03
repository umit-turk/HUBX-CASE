import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {GridStyles} from '../../theme/grid.styles';
import {HeaderStyles} from './header.styles';
import {SpaceStyles} from '../../theme/space.styles';
import rectangleImage from '../../images/rectangle.png';

const Header: React.FC = ({
  title,
  subTitle,
  text,
  boldTitle,
  onboardingNumber,
}) => {
  return (
    <SafeAreaView style={[SpaceStyles.px(24), HeaderStyles.container]}>
      <View style={[GridStyles.flexRow]}>
        <Text style={HeaderStyles.onBoardingTitle(onboardingNumber)}>
          {title}{' '}
        </Text>
        <View style={HeaderStyles.boldTitleImageContainer}>
        <Text style={HeaderStyles.onBoardingBoldTitle(onboardingNumber)}>
          {boldTitle}
        </Text>
        {(onboardingNumber === 2 || onboardingNumber === 3) && (
          <Image style={HeaderStyles.headerImage} source={rectangleImage} />
        )}
        </View>
      </View>
      {subTitle && (
        <Text style={HeaderStyles.onBoardingTitle(onboardingNumber)}>
          {subTitle}
        </Text>
      )}
      {text && <Text style={HeaderStyles.text}>{text}</Text>}
    </SafeAreaView>
  );
};

export default Header;
