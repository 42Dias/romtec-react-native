import React from 'react';
import { 
  View, 
  Text
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

export function Login (){
  const navigation = useNavigation();

  function WelcomePage() {
    navigation.navigate('Welcome');
  }

  return(
    <Background>
      <View style={styles.container}>     

        <View style={styles.content}>
          
          <RectButton 
            style={styles.containerButtonBack} 
            onPress={WelcomePage}
          >
            <MaterialCommunityIcons 
              name="keyboard-backspace"
              size={24}
              color={theme.colors.yellow}
            />
          </RectButton>

          <Text style={styles.title}>
            Login
          </Text>

          <RectButton 
            style={styles.containerButton} 
          >
            <TextInput
              style={styles.titleButton}
              placeholder="Seu email"
              placeholderTextColor="#fff"
            />
          </RectButton>

          <RectButton 
            style={styles.containerButton} 
          >
            <TextInput
              style={styles.titleButton}
              placeholder="Sua senha"
              secureTextEntry={true}
              placeholderTextColor="#fff"
            />
          </RectButton>

          <RectButton 
            style={styles.containerButton} 
            // onPress={LoginPage}
          >
            <Text style={styles.titleButton}>
              Entrar
            </Text>
          </RectButton>
                              
        </View>
      </View>
    </Background>
  );
}