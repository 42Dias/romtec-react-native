import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 80,
  },
  image: {
    width: '100%',
    height: 500,
    position: 'relative',
    bottom: 69
  },
  content: {    
    marginTop: -40,    
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,   
    fontFamily: theme.fonts.title700,
    lineHeight: 40 
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
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
  containerButtonRegister: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.blackSecondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  containerButtonBack: {
    height: 52,
    width: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: '10%',
    zIndex: 999
  },
  containerButtonLogin: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.yellow,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  titleButtonLogin: {
    flex: 1,
    color: theme.colors.textButtonBlack,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
});