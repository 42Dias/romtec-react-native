import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
  },
  content: {    
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    textAlign: 'left',
    fontSize: 22
  },
  containerButtonBack: {
    padding: 0,
    width: '50%',
    borderRadius: 4,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.yellow,
    marginTop: 20
  },
  containerButtonBackOi: {
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.yellow,
    borderRadius: 5,
    marginTop: 10,
  },
  titleButtonOi: {
    fontWeight: 'bold',
    fontSize: 16
  },
  titleButton: {
    fontWeight: 'bold',
    fontSize: 16
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#252332',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    left: 100,
    backgroundColor: '#252332',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  containerButtonInput: {
    width: '100%',
    height: 86,
    backgroundColor: '#252332',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    marginTop: 20,
  }, 
  containerButtonCrosssings: {
    width: '100%',
    height: 86,
    backgroundColor: '#252332',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 20
  },
  flexContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  titlePhases: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: 190,
  },
  btnExec: {
    width: 120,
    height: 46,
    backgroundColor: theme.colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  btnTitle: {
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20
  },
  btnAddModal: {
    marginTop: 30,
    backgroundColor: '#00E1AF',
    width: 250,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 7,
  },
  containerButtonAdd: {
    width: '100%',
    height: 86,
    backgroundColor: '#00E1AF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 20
  },
  titlePhasesNumber: {
    fontSize: 32,
    color: 'white',
  },
});