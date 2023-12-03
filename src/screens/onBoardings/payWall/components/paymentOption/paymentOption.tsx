import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PaymentOptionStyles} from './paymentOption.styles';
import LinearGradient from 'react-native-linear-gradient';
const PaymentOptions = ({paymentData}) => {
  const [selectedOption, setSelectedOption] = useState(2);

  const handleSelectOption = optionId => {
    setSelectedOption(optionId);
  };

  return (
    <View style={PaymentOptionStyles.container}>
      {paymentData.map(option => (
        <TouchableOpacity
          activeOpacity={1}
          key={option.id}
          style={[
            PaymentOptionStyles.card,
            selectedOption === option.id && PaymentOptionStyles.selectedCard,
          ]}
          onPress={() => handleSelectOption(option.id)}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={
              selectedOption === option.id
                ? ['rgba(40, 175, 110, 0.17)', 'rgba(40, 175, 110, 0)']
                : ['transparent', 'transparent']
            }
            style={PaymentOptionStyles.linearGradient}>
            <View style={PaymentOptionStyles.paymentInfoContainer}>
              {selectedOption === option.id ? (
                <View style={PaymentOptionStyles.circleTicked}></View>
              ) : (
                <View style={PaymentOptionStyles.circleTick}></View>
              )}
              <View>
                <Text style={PaymentOptionStyles.date}>{option.date}</Text>
                <Text
                  style={{
                    ...PaymentOptionStyles.description,
                    fontWeight: selectedOption === option.id ? '400' : '300',
                  }}>
                  {option.description}
                </Text>
              </View>
            </View>
          </LinearGradient>
          {option?.discount && (
            <Text style={PaymentOptionStyles.save}>
              Save: {option.discount.save}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentOptions;
