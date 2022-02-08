import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import CloseIcon from './../../assets/close-icon.png';


export function NavClose() {
  const navigation = useNavigation();
  
  function GoBackPage() {
    navigation.goBack();
  } 

  return (
    <View style={styles.navOpen}>
      <RectButton 
        onPress={GoBackPage}
        style={styles.containerButtonBack} 
      > 
        <Text style={styles.textTitle}>Fechar travessia</Text>
      </RectButton> 
    </View>
  );  
}