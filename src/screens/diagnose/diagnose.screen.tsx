import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../shared/ui/button/button';
import { useDispatch, useSelector } from 'react-redux';
import { MarkActionTypes } from '../../state/markOnBoarding/mark.action.type';
import { GridStyles } from '../../shared/theme/grid.styles';
import { Text } from 'react-native';

// import { Container } from './styles';

const Diagnose: React.FC = () => {
  const dispatch = useDispatch()
  const onBoardingComplete = useSelector((state) => state.markState.onboardingComplete);
  const clearState = () => {
    dispatch({type:MarkActionTypes.clear})
  }
  return <SafeAreaView style={[GridStyles.flexColumn, GridStyles.justifyCenter, GridStyles.alignItemsCenter, GridStyles.flexDefault]}>
    <Button onClick={clearState} text='clear state for onboarding' />
    <Text>Marked Status: {!onBoardingComplete ? 'not marked' : 'marked'}</Text>
  </SafeAreaView>
}

export default Diagnose;