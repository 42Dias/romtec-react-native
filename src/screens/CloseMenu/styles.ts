import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {    
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  containerButtonBack: {
    height: 90,
    width: '80%',
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.blackSecondary,
    marginTop: 50
  },
  iconButton: {
    position: 'absolute',
    left: 40,
  },
});