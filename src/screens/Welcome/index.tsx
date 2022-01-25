import React from 'react';
import { 
  View, 
  Text, 
  Image,
  Button,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Welcome(){
  const navigation = useNavigation();

  function LoginPage() {
    navigation.navigate('Login')
  }

  return(
    <Background>
      <View style={styles.container}>     
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="cover"
        /> 

        <View style={styles.content}>
          <Text style={styles.title}>
            Bem-vindo {'\n'}
            a Romtec 🔧
          </Text>

          <RectButton 
            style={styles.containerButton} 
            onPress={LoginPage}
          >
            <Text style={styles.titleButton}>
              Entrar
            </Text>
          </RectButton>
          <RectButton 
            style={styles.containerButtonRegister} 
          >
            <Text style={styles.titleButtonRegister}>
              Cadastrar
            </Text>
          </RectButton>
                              
        </View>
      </View>
    </Background>
  );
}