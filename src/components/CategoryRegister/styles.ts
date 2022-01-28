import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 247,
    height: 194,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 8,
    borderRadius: 20,
  },
  image: {
    borderRadius: 20,
    borderWidth: 2, 
  },
  content: {
    width: 247,
    height: 194,
    borderRadius: 20,
  },
  check: {
    position: 'absolute',
    width: 12, 
    height: 12, 
    backgroundColor: theme.colors.secondary100, 
    borderColor: theme.colors.secondary50, 
    borderWidth: 2, 
    borderRadius: 60 
  }, 
  checked: { 
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 20
  }
});