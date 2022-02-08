import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 450,
    position: 'relative',
    bottom: 140,
  },
  content: {
    marginTop: -120,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  containerButton: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.yellow,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleButton: {
    flex: 1,
    color: theme.colors.textButtonBlack,
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
  titleButtonRegister: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {

    fontSize: 28

  },
  button: {
    marginLeft: 40,
    marginTop: 15,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginBottom: 15


  },
  textButton: {

    color: 'white',
    fontSize: 20

  },

  textLocation: {

    fontSize: 20

  }

});