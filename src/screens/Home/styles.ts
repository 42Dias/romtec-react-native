import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 194,
    position: 'relative',
    top: 60,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 15
  },
  titleSwiper: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 22,
    position: 'relative',
    top: 90,
  },
  matches: {    
    marginTop: 24,
    marginLeft: 24
  }
});