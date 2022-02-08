import React from 'react';
import { 
  View, 
  Text,
  ScrollView,
  Image,
} from 'react-native';
import HomeImage from './../../assets/homeimage.png';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import Planejamento from './../../assets/planejamento.png';
import Ultimo from './../../assets/ultimo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

export function Phases (){
  const navigation = useNavigation();

  return(
    <>
      <Background>
        <View style={styles.container} >
          <Image 
            source={Planejamento} 
            style={styles.image} 
            resizeMode="contain"
          /> 

          <Image 
            source={Ultimo} 
            style={styles.image} 
            resizeMode="contain"
          />

          <View style={styles.content}>
            <RectButton
              style={styles.point}
            >
              <Text style={styles.titleVerify}>Ponto de verificação</Text>
            </RectButton>

            <View style={styles.flexButton}>
              <RectButton
                style={styles.pause}
              >
                <Text>Pausar</Text>
              </RectButton>
              <RectButton
                style={styles.finish}
              >
                <Text>Finalizar</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </Background>
    </>
  );
}