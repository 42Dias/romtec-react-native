import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    top: 90
  }, 
  content: { 
    marginTop: 150, 
    paddingHorizontal: 30 
  }, 
  iconButton: {

  },
  titlePhase: {
    fontSize: 12,
    color: '#fff',
    maxWidth: 120
  },
  titlePhases: {
    fontSize: 22,
    color: '#fff'
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.blackSecondary,
    borderRadius: 5,
    padding: 30,
    marginTop: 20
  },
});
