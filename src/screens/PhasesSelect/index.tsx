import React from 'react';
import { 
  View, 
  Text,
  ScrollView,
  Image
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import DeleteButton from './../../assets/delete.png';
import EditButton from './../../assets/edit.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { NavOpen } from '../../components/NavOpen';

export function PhasesSelect (){
  const navigation = useNavigation();

  function PhasesPage() {
    navigation.navigate('Phases');
  }

  return(
    <>
      <Background>
        <View style={styles.container}>    
          <Text style={styles.titlePhases}>Executar travessia</Text>
        </View>
        
        <ScrollView style={styles.content}>
          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton 
              style={styles.containerButtonLogin}
              onPress={PhasesPage}
            >
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>

          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton style={styles.containerButtonLogin}>
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>

          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton style={styles.containerButtonLogin}>
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>

          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton style={styles.containerButtonLogin}>
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>

          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton style={styles.containerButtonLogin}>
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>

          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton style={styles.containerButtonLogin}>
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>

          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton style={styles.containerButtonLogin}>
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>

          <View style={styles.flexButton}>
            <Text style={styles.titlePhase}>Etapa de limpeza do evaldinho lindo aaaaaaaaaaa testando responsividade</Text>
            
            <RectButton style={styles.containerButtonLogin}>
              <Text style={styles.titleButtonLogin}>
                Executar
              </Text>
            </RectButton>

            <RectButton>
              <MaterialCommunityIcons 
                name="delete" 
                size={24} 
                color={theme.colors.primary}
                style={styles.iconButton}
              /> 
            </RectButton> 
            <RectButton> 
              <MaterialCommunityIcons 
                name="eye" 
                size={24} 
                style={styles.iconButton}
                color={theme.colors.yellow} 
              /> 
            </RectButton>
          </View>
        </ScrollView>

      </Background>
    </>
  );
}