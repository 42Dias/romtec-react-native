// import React from 'react'
// import { 
//   View, 
//   Text, 
//   Image,
// } from 'react-native'
// import { RectButton } from 'react-native-gesture-handler'
// import IllustrationImg from '../../assets/illustration.png'
// import { styles } from './styles'

// import { Background } from '../../components/Background'
// import { useNavigation } from '@react-navigation/native'

// export function Welcome(){
//   const navigation = useNavigation()

//   function LoginPage() {
//     navigation.navigate('Login')
//   }

//   function RegisterPage() {
//     navigation.navigate('Register')
//   }

//   return(
//     <Background>
//       <View style={styles.container}>     
//         <Image 
//           source={IllustrationImg} 
//           style={styles.image} 
//           resizeMode="cover"
//         /> 

//         <View style={styles.content}>
//           <Text style={styles.title}>
//             Bem-vindo {'\n'}
//             a Romtec 🔧
//           </Text>

//           <RectButton 
//             style={styles.containerButton} 
//             onPress={LoginPage}
//           >
//             <Text style={styles.titleButton}>
//               Entrar
//             </Text>
//           </RectButton>
          
//           <RectButton 
//             style={styles.containerButtonRegister} 
//             onPress={RegisterPage}
//           >
//             <Text style={styles.titleButtonRegister}>
//               Cadastrar
//             </Text>
//           </RectButton>
                              
//         </View>
//       </View>
//     </Background>
//   )
// }
import React, { useState, useCallback } from 'react';
import { Image, View, Text, ScrollView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import HomeImage from './../../assets/homeimage.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppointmentProps } from '../../components/Appointment';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { NavOpen } from '../../components/NavOpen';
import { CategorySelectRegister } from '../../components/CategorySelectRegister';

export function Welcome() {
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

  const ROMTEC = 'https://projetos.42dias.com.br/romtec/#/'

  return (
    // <Background>   
    //   <ScrollView>
    //     <View style={styles.container} >
    //       <Image 
    //         source={HomeImage} 
    //         style={styles.image} 
    //         resizeMode="cover"
    //       /> 
    //     </View>

    //     <View style={styles.container}>
    //       <Text style={styles.titleSwiper}>Cadastros</Text>
    //     </View>

    //     <CategorySelectRegister 
    //       categorySelected={category}
    //       setCategory={handleCategorySelect}
    //     />
    //   </ScrollView>
    //   <NavOpen />
    // </Background>

    <View>
      <StatusBar />

      <View style={{ width: '100%', height: '100%' }}>
        <WebView
          source={{ uri: ROMTEC }}
        />
        {/* <NavOpen /> */}
      </View>
    </View>

  );  
}