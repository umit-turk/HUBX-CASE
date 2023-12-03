import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  gradientColors?: string[];
}

export const GradientText: React.FC = ({
  children,
  style,
  gradientColors = ['red', 'green', 'blue'],
  ...rest
}: GradientTextProps) => {
  return (
    <MaskedView
      maskElement={
        <Text style={style} {...rest}>
          {children}
        </Text>
      }>
      <LinearGradient
        colors={gradientColors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={[style, {opacity: 0}]} {...rest}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};
