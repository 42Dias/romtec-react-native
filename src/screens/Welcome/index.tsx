import React, { useEffect } from 'react'
import { 
  View, 
  Text, 
  Image,
  ToastAndroid,
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'

import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { ip, token } from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Welcome(){
  const navigation = useNavigation()

  function LoginPage() {
    console.log('Entrou')
    navigation.navigate('Login')
  }

  function RegisterPage() {
    navigation.navigate('Register')
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
          navigation.navigate('Home');
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
      ToastAndroid.show('Erro no servidor!', ToastAndroid.LONG)
    }
  }
  useEffect(() => {
    pegarValor()
  }, [])
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
            onPress={LoginPage}
          >
            <Text style={styles.titleButton}>
              Entrar
            </Text>
          </RectButton>
          
          <RectButton 
            style={styles.containerButtonRegister} 
            onPress={RegisterPage}
          >
            <Text style={styles.titleButtonRegister}>
              Cadastrar
            </Text>
          </RectButton>
                              
        </View>
      </View>
    </Background>
  )
}
// import React, { useState, useCallback } from 'react';
// import { Image, View, Text, ScrollView, StatusBar, TouchableOpacity, Alert } from 'react-native';
// import { WebView } from 'react-native-webview';
// import HomeImage from './../../assets/homeimage.png';
// import { Background } from '../../components/Background';
// import { styles } from './styles';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AppointmentProps } from '../../components/Appointment';
// import { COLLECTION_APPOINTMENTS } from '../../configs/database';
// import { NavOpen } from '../../components/NavOpen';
// import { CategorySelectRegister } from '../../components/CategorySelectRegister';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';
// import MapView from 'react-native-maps';
// import { Button } from '../../components/Button';

// export function Welcome() {
//   const [category, setCategory] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
//   const [location, setLocation] = useState(0.0);
//   const [latitude, setLatitude] = useState(0.0);
//   const [longitude, setLongitude] = useState(0.0);
//   const [accuracy, setaccuracy] = useState(0.0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const navigation = useNavigation();

//   function handleCategorySelect(categoryId: string) {
//     categoryId === category ? setCategory('') : setCategory(categoryId);
//   }

//   function handleAppointmentDetails(guildSelected: AppointmentProps) {
//     navigation.navigate('AppointmentDetails', { guildSelected });
//   }

//   function handleAppointmentCreate() {
//     navigation.navigate('AppointmentCreate');
//   }

//   async function loadAppointments() {
//     const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
//     const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

//     if (category) {
//       setAppointments(storage.filter(item => item.category === category));
//     } else {
//       setAppointments(storage)
//     }

//     setLoading(false);
//   }

//   function getLocal() {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       Location.enableNetworkProviderAsync()
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }
//       let l = await Location.getProviderStatusAsync()
//       console.log(l)
//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords.latitude)
//       setLatitude(location.coords.latitude);
//       setLongitude(location.coords.longitude);
//       console.log(location.coords)
//       setaccuracy(location.coords.accuracy!)
//     })();
//   }
//   useFocusEffect(useCallback(() => {
//     loadAppointments();
//     getLocal()

//   }, [category]));

//   let text = 'Localizando..';
//   let precisao = null
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = latitude + ", " + longitude;
//     precisao = accuracy
//   }
//   const ROMTEC = 'https://projetos.42dias.com.br/romtec/#/'

//   return (
//     // <Background>   
//     //   <ScrollView>
//     //     <View style={styles.container} >
//     //       <Image 
//     //         source={HomeImage} 
//     //         style={styles.image} 
//     //         resizeMode="cover"
//     //       /> 
//     //     </View>

//     //     <View style={styles.container}>
//     //       <Text style={styles.titleSwiper}>Cadastros</Text>
//     //     </View>

//     //     <CategorySelectRegister 
//     //       categorySelected={category}
//     //       setCategory={handleCategorySelect}
//     //     />
//     //   </ScrollView>
//     //   <NavOpen />
//     // </Background>

//     <View>
//       <StatusBar />

//       <View style={{ width: '100%', height: '100%' }}>
//         <WebView
//           source={{ uri: ROMTEC }}
//         />
//          <MapView
//          style={{ width: '100%', height: '50%' }}
//         initialRegion={{
//           latitude: latitude,
//           longitude: longitude,
//           latitudeDelta: 0.000922,
//           longitudeDelta: 0.000421
//         }}
//         showsUserLocation={true}
//         zoomEnabled={true}
//         loadingEnabled={true}
//         mapType='hybrid'
//       >
//       </MapView>
//         <TouchableOpacity
//           onPress={getLocal}
//           style={styles.button}>
//           <Text style={styles.textButton}>Obter localização</Text>
//         </TouchableOpacity>
//         <Text style={{ marginLeft: 120 }} >{text}</Text>
//         <Text style={{ marginLeft: 160 }} >Precisão :{precisao}</Text>
//         {/* <NavOpen /> */}
//       </View>
     
//     </View>

//   );
// }