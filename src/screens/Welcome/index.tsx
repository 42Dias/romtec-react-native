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