import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {SearchIcon} from '../../../../shared/icons/search.icon';
import LeftLeafImage from '../../../../shared/images/LeftLeaf.png';
import RightLeafImage from '../../../../shared/images/RightLeaf.png';
import { SearchStyles } from './search.styles';

const Search: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <View style={SearchStyles.container}>
        <Text style={SearchStyles.title}>Hi, plant lover!</Text>
        <Text style={SearchStyles.time}>Good Afternoon! ⛅</Text>
      <View style={SearchStyles.searchContainer}>
        <View style={SearchStyles.iconContainer}>
          <SearchIcon />
        </View>
        <TextInput
          placeholder="Search for plants"
          style={SearchStyles.input}
          value={text}
          onChangeText={setText}
          placeholderTextColor={'rgba(175, 175, 175, 1)'}
        />
      </View>
      <View style={SearchStyles.bottomLeftImage}>
        <Image  source={LeftLeafImage}  />
      </View>
      <View style={SearchStyles.bottomRightImage}>
        <Image source={RightLeafImage} />
      </View>
    </View>
  );
};


export default Search;
