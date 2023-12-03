import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GridStyles} from '../../../shared/theme/grid.styles';
import paywallImage from '../../../shared/images/paywall.png';
import {PayWallStyles} from './paywall.styles';
import {SpaceStyles} from '../../../shared/theme/space.styles';
import PaywallCard from './components/paywallcard/paywall';
import {payWallData} from '../../../shared/dummyData/paywallData';
import PaymentOptions from './components/paymentOption/paymentOption';
import {paymentData} from '../../../shared/dummyData/paymentData';
import {Button} from '../../../shared/ui/button/button';
import {TextStyles} from '../../../shared/theme/text.styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {TabRoutes} from '../../../navigation/tab/tab.routes';
import { useDispatch } from 'react-redux';
import { MarkActionTypes } from '../../../state/markOnBoarding/mark.action.type';

const PayWall: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const close = () => {
    dispatch({type: MarkActionTypes.setMark});
    navigation.navigate(Routes.Tab, {
      screen: TabRoutes.Home,
    });
  };

  return (
    <SafeAreaView style={[GridStyles.flexDefault, PayWallStyles.container]}>
      <View style={[GridStyles.flex(1), PayWallStyles.firstContainer]}>
        <TouchableOpacity onPress={close} style={PayWallStyles.close}>
          <Text style={[TextStyles.white]}>X</Text>
        </TouchableOpacity>
        <Image source={paywallImage} style={PayWallStyles.image} />
        <View style={PayWallStyles.paywallWrapper}>
          <View style={[SpaceStyles.px(24)]}>
            <View style={[GridStyles.flexRow, GridStyles.alignItemsCenter]}>
              <Text style={PayWallStyles.plantApp}>PlantApp </Text>
              <Text style={PayWallStyles.premium}>Premium</Text>
            </View>
            <Text style={PayWallStyles.text}>Access All Features</Text>
            <FlatList
              data={payWallData}
              keyExtractor={item => item.id}
              renderItem={({item}) => <PaywallCard item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{width: 8}} />}
            />
          </View>
        </View>
      </View>
      <View style={[SpaceStyles.mx(24)]}>
        <PaymentOptions paymentData={paymentData} />
        <View style={[SpaceStyles.mt(20)]}>
          <Button
            text="Try free for 3 days"
            activeOpacity={1}
            size={16}
            borderRadius={14}
          />
          <Text style={PayWallStyles.footerDescriotion}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
          <Text style={PayWallStyles.footerLinks}>
            Terms • Privacy • Restore
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PayWall;
