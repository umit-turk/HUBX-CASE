import * as React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import {ButtonStyles} from './button.styles';

export const Button = ({
  color = 'green',
  text = '',
  onClick = () => {},
  activeOpacity = 0,
  borderRadius = 12,
  size = 15,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={ButtonStyles.container(color, borderRadius)}
      onPress={onClick}>
      <Text style={ButtonStyles.text(color, size)}>{text}</Text>
    </TouchableOpacity>
  );
};