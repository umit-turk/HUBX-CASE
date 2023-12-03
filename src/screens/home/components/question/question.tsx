import React from 'react';
import {Image, Text, View} from 'react-native';
import {CardStyles} from '../../../../shared/theme/card.styles';
import {QuestionStyles} from './question.styles';

const Question: React.FC = ({item}) => {
  return (
    <View style={CardStyles.questionCard}>
      <Image style={QuestionStyles.image} source={{uri: item?.image_uri}} />
      <View style={QuestionStyles.textContainer}>
        <Text style={QuestionStyles.title}>
          {item?.title} <Text>{item?.subtitle}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Question;
