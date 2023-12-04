import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {Routes} from '../../../navigation/routes';
import {GridStyles} from '../../../shared/theme/grid.styles';
import {DefaultRoutes} from '../../../navigation/default/default.routes';
import plantImage from '../../../shared/images/image.png';
import {Button} from '../../../shared/ui/button/button';
import {SpaceStyles} from '../../../shared/theme/space.styles';
import {TextStyles} from '../../../shared/theme/text.styles';
import {ThemeVariables} from '../../../shared/theme/variables';
import { FirstStyles } from './first.screen.styles';

const First: React.FC = () => {
  const navigation = useNavigation();

  const next = () => {
    navigation.navigate(Routes.Default, {
      screen: DefaultRoutes.Onboardings.Second,
    });
  };
  return (
    <SafeAreaView
      style={[
        GridStyles.flexDefault,
        {backgroundColor: ThemeVariables.background},
      ]}>
      <View style={[GridStyles.flexDefault]}>
        <Image source={plantImage} />
      </View>
      <View style={[SpaceStyles.mx(24), GridStyles.alignItemsCenter]}>
        <Button text="Get Started" onClick={next} activeOpacity={1} />
        <Text style={FirstStyles.footerText}>
          By tapping next, you are agreeing to PlantID 
        </Text>
        <View style={[GridStyles.flexRow, SpaceStyles.pb(8)]}>
        <Text style={FirstStyles.terms}>Terms of Use</Text>
        <Text style={FirstStyles.seperator}> & </Text>
        <Text style={FirstStyles.terms}>Privacy Policy</Text>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default First;
