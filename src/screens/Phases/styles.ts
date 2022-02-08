import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  content: {
    marginTop: 40,
    paddingHorizontal: 30 
  }, 
  iconButton: {

  },
  point: {
    backgroundColor: theme.colors.blackSecondary,
    width: 280,
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  pause: {
    backgroundColor: '#00E1AF',
    width: 135,
    margin: 5,
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finish: {
    backgroundColor: theme.colors.yellow,
    width: 135,
    margin: 5,
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleVerify: {
    color: '#fff',
  },
  containerButtonLogin: {
    width: 130,
    height: 42,
    backgroundColor: theme.colors.yellow,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },  
  titleButtonLogin: {
    flex: 1,
    color: theme.colors.textButtonBlack,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  flexButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 220,
    marginTop: 40
  },
});
