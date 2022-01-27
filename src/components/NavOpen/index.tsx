import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MenuIcon from './../../assets/menu-icon.png';


export function NavOpen() {
  const navigation = useNavigation();
  
  function NavOpenMenu() {
    navigation.navigate('CloseMenu');
  } 

  return (
    <View style={styles.navOpen}>
      <RectButton 
        onPress={NavOpenMenu}
        style={styles.containerButtonBack} 
      > 
        <Image 
          source={MenuIcon} 
          // style={styles.image} 
          resizeMode="cover"
        /> 
      </RectButton> 
    </View>
  );  
}