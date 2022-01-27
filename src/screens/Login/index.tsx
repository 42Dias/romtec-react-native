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

  function HomePage() {
    navigation.navigate('Home');
  }

  return(
    <Background>
      <View style={styles.container}>     

        <View style={styles.content}>
          <RectButton 
            onPress={WelcomePage}
            style={styles.containerButtonBack} 
          > 
            <MaterialCommunityIcons 
              name="keyboard-backspace"
              size={35} 
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
            style={styles.containerButtonPassword} 
          >
            <TextInput
              style={styles.titleButtonPassword}
              placeholder="Sua senha"
              secureTextEntry={true}
              placeholderTextColor="#fff"
            />
          </RectButton>

          <RectButton 
            style={styles.containerButtonLogin} 
            onPress={HomePage}
          >
            <Text style={styles.titleButtonLogin}>
              Entrar
            </Text>
          </RectButton>
                              
        </View>
      </View>
    </Background>
  );
}