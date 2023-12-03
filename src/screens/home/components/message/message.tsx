import React from 'react';
import {Image, Text, View} from 'react-native';
import MessageImage from '../../../../shared/images/message.png';
import {MessageStyles} from './message.styles';
import {GridStyles} from '../../../../shared/theme/grid.styles';
import {ArrowRightIcon} from '../../../../shared/icons/arrow-right.icon';
import {SpaceStyles} from '../../../../shared/theme/space.styles';
import {GradientText} from '../../../../core/helpers/gradients';

const Message: React.FC = () => {
  return (
    <View style={[MessageStyles.container, SpaceStyles.my(24)]}>
      <View style={[GridStyles.flexRow, GridStyles.gridGap(16)]}>
        <View style={MessageStyles.imageContainer}>
          <Image style={[SpaceStyles.mt(1)]} source={MessageImage} />
          <View style={MessageStyles.messageCountContainer}>
            <Text style={MessageStyles.messageCount}>1</Text>
          </View>
        </View>
        <View>
          <GradientText
            gradientColors={['rgba(229, 201, 144, 1)', 'rgba(228, 176, 70, 1)']}
            style={
              MessageStyles.firstText
            }>{`FREE Premium Available`}</GradientText>
          <GradientText
            gradientColors={[
              'rgba(255, 222, 156, 0.8)',
              'rgba(245, 194, 91, 0.8)',
            ]}
            style={
              MessageStyles.secondText
            }>{`Tap to upgrade your account!`}</GradientText>
        </View>
      </View>
      <View>
        <ArrowRightIcon />
      </View>
    </View>
  );
};

export default Message;
