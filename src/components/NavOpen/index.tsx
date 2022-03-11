import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


export function NavOpen() {
  const navigation = useNavigation();
  
  function CrossingsOpen() {
    navigation.navigate('Crossings');
  }

  return (
    <View style={styles.navOpen}>
      <RectButton 
        onPress={CrossingsOpen}
        style={styles.containerButtonBack} 
      > 
        <Text style={styles.title}>Iniciar</Text>
      </RectButton> 
    </View>
  );  
}