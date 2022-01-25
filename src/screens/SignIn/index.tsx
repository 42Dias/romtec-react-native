import React from 'react';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator,
  TextInput
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import { useAuth } from '../../hooks/auth';

import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { Background } from '../../components/Background';

export function SignIn(){

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