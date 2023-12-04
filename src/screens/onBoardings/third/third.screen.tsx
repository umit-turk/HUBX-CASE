import React from 'react';
import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GridStyles} from '../../../shared/theme/grid.styles';
import backgroundImage from '../../../shared/images/Object.png';
import iphoneImage from '../../../shared/images/iphone.png';
import artWorkImage from '../../../shared/images/Artwork.png';
import {ThirdStyles} from './third.styles';
import {Button} from '../../../shared/ui/button/button';
import {SpaceStyles} from '../../../shared/theme/space.styles';
import Points from '../../../shared/ui/points/points';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {DefaultRoutes} from '../../../navigation/default/default.routes';
import LinearGradient from 'react-native-linear-gradient';

const Third: React.FC = () => {
  const navigation = useNavigation();

  const next = () => {
    navigation.navigate(Routes.Default, {
      screen: DefaultRoutes.Onboardings.PayWall,
    });
  };

 

  return (
    <SafeAreaView style={[GridStyles.flexDefault]}>
      <View style={ThirdStyles.backgroundContainer}>
        {/* Background Image */}
        <Image source={backgroundImage} style={ThirdStyles.backgroundImage} />

        {/* iPhone Image ve Artwork Image */}
        <View style={ThirdStyles.iphoneContainer}>
          {/* Artwork Image Container */}
          <View style={ThirdStyles.artWorkContainer}>
            <Image source={artWorkImage} style={ThirdStyles.artworkImage} />
          </View>

          {/* iPhone Image Container */}
          <View style={ThirdStyles.iphoneImageContainer}>
            <Image source={iphoneImage} style={ThirdStyles.iphoneImage} />
          </View>
        </View>

       
      </View>
       {/* Button Container */}
       <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
          style={{height:235, width: '100%'}}>
        </LinearGradient>
        <View style={[SpaceStyles.mx(24), ThirdStyles.buttonContainer]}>
          <Button onClick={next} text="continue" activeOpacity={1} />
        </View>
        <View style={[SpaceStyles.pb(14.5),ThirdStyles.pointsContainer]}>
          <Points onboardingNumber={3} />
        </View>
    </SafeAreaView>
  );
};

export default Third;
