import React, { useState, useCallback } from 'react';
import { Image, View, Text, ScrollView, ToastAndroid } from 'react-native';
import HomeImage from './../../assets/homeimage.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Load } from '../../components/Load';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { NavOpen } from '../../components/NavOpen';
import axios from 'axios';
import { ip, token } from '../../services/api';

export function Home() {
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
  async function pegarValor(){
    const myuser = await AsyncStorage.getItem('token')
    console.log(myuser)
    loadUser(myuser)
  }
  async function loadUser(token: any) {
    try {
      const response = await axios({
        method: 'get',
        url: `${ip}:8145/api/auth/me`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        timeout: 50000,
      }).then(response => {
        // navigate('/home', { replace: true })
        //console.log(response)
        if(response.status === 200){
          
        }else{
          ToastAndroid.show('Erro ao puxar os dados!', ToastAndroid.LONG)
        }
  
        return response.data
      })
      //console.log(response)
  
      // saves client's data into AsyncStorage
      AsyncStorage.setItem('roles', JSON.stringify(response.tenants[0].roles[0]))
      // saves client's data into AsyncStorage
      AsyncStorage.setItem('tenantId', JSON.stringify(response.tenants[0].tenant.id))
      // saves client's data into AsyncStorage
      AsyncStorage.setItem('id', JSON.stringify(response.id))
      AsyncStorage.setItem('nome', JSON.stringify(response.firstName))
      // saves client's data into AsyncStorage
      AsyncStorage.setItem('status', JSON.stringify(response.tenants[0].status))
    } catch (error) {
      console.log(error)
    }
  }
  
  useFocusEffect(useCallback(() => {
    loadAppointments();
    pegarValor()
    // console.log('token')
    // console.log(token)
    
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
          <Text style={styles.titleSwiper}>Etapas</Text>
        </View>

        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </ScrollView>
      <NavOpen />
    </Background>

  );  
}