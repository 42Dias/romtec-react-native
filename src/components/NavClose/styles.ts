import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  navOpen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.bg,
    zIndex: 999,
    height: 50
  },
  containerButtonBack: {
    height: 60,
    width: 190,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 25,
    backgroundColor: theme.colors.yellow,
  },
  textTitle: {
    fontWeight: 'bold'
  },
});