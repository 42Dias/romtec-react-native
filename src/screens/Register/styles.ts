import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderRadius: 4,
    height: 48,
    borderWidth: 0,
    color: theme.colors.heading,
    backgroundColor: theme.colors.blackSecondary,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: theme.colors.yellow,
    borderRadius: 4,
    width: '80%',
  },
  label: {
    color: 'white',
    marginLeft: -250,
    marginBottom: 10,
    marginTop: 20,
  },
  containerButtonBack: {
    height: 48,
    width: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -30,
    marginLeft: -260,
  },
  title: {
    marginTop: -60,
    padding: 40,
    color: 'white',
    fontSize: 18,
  }
})