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
  containerButtonregister: {
    width: '80%',
    height: 56,
    backgroundColor: theme.colors.yellow,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
    padding: 30,
    color: 'white',
    fontSize: 18,
  },
  titleButtonRegister: {
    flex: 1,
    color: theme.colors.bg,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  containerButton: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.blackSecondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleButton: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  containerButtonPassword: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.blackSecondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  titleButtonPassword: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
})