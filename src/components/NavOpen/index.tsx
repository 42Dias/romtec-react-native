import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export function NavOpen() {
  const navigation = useNavigation();
  
  function NavOpenMenu() {
    navigation.navigate('PhasesSelect');
  } 

  return (
    <View style={styles.navOpen}>
      <RectButton 
        onPress={NavOpenMenu}
        style={styles.containerButtonBack} 
      > 
        <Text style={styles.textTitle}>Executar travessia</Text>
      </RectButton> 
    </View>
  );  
}