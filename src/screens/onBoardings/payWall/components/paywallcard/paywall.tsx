import React from 'react';
import { Text, View } from 'react-native';
import { CardStyles } from '../../../../../shared/theme/card.styles';
import { PayWallStyles } from './paywall.styles';

const PaywallCard = ({ item }) => (
    <View style={CardStyles.paywallCard}>
      <View style={PayWallStyles.iconCard}>
        {item?.icon}
      </View>
      <Text style={PayWallStyles.title}>{item?.title}</Text>
      <Text style={PayWallStyles.subTitle}>{item?.subTitle}</Text>
    </View>
  );

export default PaywallCard;