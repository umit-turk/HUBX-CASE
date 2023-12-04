import {StyleSheet} from 'react-native';
import { ThemeVariables } from '../../../shared/theme/variables';

export const ThirdStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundContainer: {
        flex: 1,
        position: 'relative',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      iphoneContainer: {
        position: 'absolute',
        top: '15%',
        left: '10%',
        right: '10%',
        alignItems: 'center',
      },
      artWorkContainer: {
        position: 'absolute',
        top: -60,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex:2,
      },
      iphoneImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
      },
      artworkImage: {
        resizeMode: 'contain',
      },
      iphoneImage: {
        resizeMode: 'contain',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: '8%',
        left: 0,
        right: 0,
      },
      pointsContainer:{
        backgroundColor:ThemeVariables.white,
      },
});
