import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Routes} from '../../../navigation/routes';
import {GridStyles} from '../../../shared/theme/grid.styles';
import {DefaultRoutes} from '../../../navigation/default/default.routes';
import contentImage from '../../../shared/images/Content.png';
import {Button} from '../../../shared/ui/button/button';
import {SpaceStyles} from '../../../shared/theme/space.styles';
import Points from '../../../shared/ui/points/points';
import {ThemeVariables} from '../../../shared/theme/variables';

const Second: React.FC = () => {
  const navigation = useNavigation();

  const next = () => {
    navigation.navigate(Routes.Default, {
      screen: DefaultRoutes.Onboardings.Third,
    });
  };
  return (
    <SafeAreaView
      style={[
        GridStyles.flexDefault,
        {backgroundColor: ThemeVariables.background},
      ]}>
      <View style={[GridStyles.flexDefault]}>
        <Image source={contentImage} />
      </View>
      <View style={[SpaceStyles.mx(24), GridStyles.alignItemsCenter]}>
        <Button text="Get Started" onClick={next} activeOpacity={1} />
      </View>
      <View style={[SpaceStyles.mt(32), SpaceStyles.mb(12.5)]}>
        <Points onboardingNumber={2} />
      </View>
    </SafeAreaView>
  );
};

export default Second;
