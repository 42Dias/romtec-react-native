import React, { useState, useCallback } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import HomeImage from './../../assets/homeimage.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppointmentProps } from '../../components/Appointment';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { NavOpen } from '../../components/NavOpen';
import { CategorySelectRegister } from '../../components/CategorySelectRegister';

export function AppRegistrations() {
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
        <View style={styles.container} >
          <Image 
            source={HomeImage} 
            style={styles.image} 
            resizeMode="cover"
          /> 
        </View>

        <View style={styles.container}>
          <Text style={styles.titleSwiper}>Cadastros</Text>
        </View>

        <CategorySelectRegister 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </ScrollView>
      <NavOpen />
    </Background>

  );  
}