import React from 'react';
import {Image, Text, View, ImageSourcePropType} from 'react-native';
import {CardStyles} from '../../../../shared/theme/card.styles';
import {CategoryStyles} from './category.styles';
import {breakTextIntoLines} from '../../../../core/helpers/breakTextIntoLines';

interface CategoryProps {
  item: {
    title: string;
    image: {
      url: ImageSourcePropType;
    };
  };
}

const Category: React.FC<CategoryProps> = ({item}) => {
  const itemTitle = item?.title;
  const lines = breakTextIntoLines(itemTitle, 1);

  return (
    <View style={CardStyles.categoryCard}>
      <View style={CategoryStyles.titleContainer}>
        {lines.map((line, index) => (
          <Text key={index} style={CategoryStyles.title}>
            {line}
          </Text>
        ))}
      </View>
      <View style={CategoryStyles.imageContainer}>
        <Image style={CategoryStyles.image} source={{uri: item?.image?.url}} />
      </View>
    </View>
  );
};

export default Category;
