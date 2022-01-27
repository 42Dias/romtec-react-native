import React, { useState, useCallback } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import HomeImage from './../../assets/homeimage.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';


import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { NavOpen } from '../../components/NavOpen';
import { NavClose } from '../../components/NavClose';
import { RectButton } from 'react-native-gesture-handler';

export function CloseMenu() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  } 
  
  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  } 
  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  } 
  
  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if(category){
      setAppointments(storage.filter(item => item.category === category));
    }else{
      setAppointments(storage)
    }
    
    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  },[category]));

  return (
    <Background>   
      <ScrollView> 
        <View style={styles.container}> 
          <View style={styles.content}> 
            <RectButton 
              // onPress={WelcomePage} 
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
              // onPress={WelcomePage} 
              style={styles.containerButtonBack} 
            > 
              <MaterialCommunityIcons 
                name="home-outline"
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
                name="home-outline"
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
                name="home-outline"
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
                name="home-outline"
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
                name="home-outline"
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