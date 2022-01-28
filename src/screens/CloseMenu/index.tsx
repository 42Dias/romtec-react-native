import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { NavOpen } from '../../components/NavOpen';
import { NavClose } from '../../components/NavClose';
import { RectButton } from 'react-native-gesture-handler';

export function CloseMenu() {

  const navigation = useNavigation();

  function PageHome() {
    navigation.navigate('Home')
  }

  function AppRegistrationsPage() {
    navigation.navigate('AppRegistrations')
  }

  return (
    <Background>   
      <ScrollView> 
        <View style={styles.container}> 
          <View style={styles.content}> 
            <RectButton 
              onPress={PageHome} 
              style={styles.containerButtonBack} 
            > 
              <MaterialCommunityIcons 
                name="home-outline"
                size={35} 
                color={theme.colors.yellow} 
                style={styles.iconButton}
              /> 
              <Text style={styles.title}>Início</Text>
            </RectButton>

            <RectButton 
              onPress={AppRegistrationsPage} 
              style={styles.containerButtonBack} 
            > 
              <MaterialCommunityIcons 
                name="file-document-outline"
                size={35} 
                color={theme.colors.yellow}
                style={styles.iconButton}
              /> 
              <Text style={styles.title}>Cadastros</Text>
            </RectButton>

            <RectButton 
              // onPress={WelcomePage} 
              style={styles.containerButtonBack}
            > 
              <MaterialCommunityIcons 
                name="cog"
                size={35} 
                color={theme.colors.yellow} 
                style={styles.iconButton}
              /> 
              <Text style={styles.title}>Config. da travessia</Text>
            </RectButton>

            <RectButton 
              // onPress={WelcomePage} 
              style={styles.containerButtonBack}
            > 
              <MaterialCommunityIcons 
                name="bag-checked"
                size={35} 
                color={theme.colors.yellow} 
                style={styles.iconButton}
              /> 
              <Text style={styles.title}>Comercial</Text>
            </RectButton>

            <RectButton 
              // onPress={WelcomePage} 
              style={styles.containerButtonBack}
            > 
              <MaterialCommunityIcons 
                name="pin-outline"
                size={35} 
                color={theme.colors.yellow} 
                style={styles.iconButton}
              /> 
              <Text style={styles.title}>Travessias</Text>
            </RectButton>

            <RectButton 
              // onPress={WelcomePage} 
              style={styles.containerButtonBack}
            > 
              <MaterialCommunityIcons 
                name="account"
                size={35} 
                color={theme.colors.yellow} 
                style={styles.iconButton}
              /> 
              <Text style={styles.title}>Operador</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>

      <NavClose />
    </Background>

  );  
}