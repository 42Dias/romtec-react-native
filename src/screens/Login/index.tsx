import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ToastAndroid
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import axios from 'axios';
import { Email, ip, token } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Login() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  const [mudarSenha, setMudarSenha] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function WelcomePage() {
    navigation.navigate('Welcome');
  }

  function HomePage() {
    const data = {
      email: email,
      password: senha
    }
    //navigation.navigate('Home');
    //console.log(data)
    Login(data)
  }
  function handleAsyncStorage(emailA: string, passwordB: string) {
    AsyncStorage.setItem('email', JSON.stringify(emailA))
    AsyncStorage.setItem('password', JSON.stringify(passwordB))
    //console.log()
  }
  function handleAsyncStorageToken(token2: string[]) {
    const setAsyncStorage = async (data: string[]) => {
      await AsyncStorage.setItem('token', JSON.stringify(data))
      //console.log('OK!!!')
    }
    setAsyncStorage(token2)
    loadUser(token2)
  }
  async function Login(submit: any) {
    setLoading(true)
    console.log(submit)
    if (submit.password === 'K4bXm93xexrc3Sd') {
      setMudarSenha(true)
    }
    // eslint-disable-next-line
    await axios.post(ip + ':8145/api/auth/sign-in', {
      email: submit.email,
      password: submit.password,
      invitationToken: '',
      tenantId: '',
    }).then((response) => {
      //console.log(response)
      if (response.status === 200) {
        ToastAndroid.show('Login efetuado com sucesso!', ToastAndroid.LONG)
        handleAsyncStorage(submit.email, submit.password)
        handleAsyncStorageToken(response.data)
        console.log(response.data)
      } else if (response.statusText === 'Forbidden') {
        ToastAndroid.show('Ops, Não tem permisão!', ToastAndroid.LONG)
        setLoading(false)
      } else {
        ToastAndroid.show('Ops, Dados Incorretos!', ToastAndroid.LONG)
        setLoading(false)
      }
    }).catch(res => {
      //console.log(res.response.data)
      ToastAndroid.show(res.response.data, ToastAndroid.LONG)
      setLoading(false)
    })
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
          if (senha === 'K4bXm93xexrc3Sd') {
            navigation.navigate('Home');
            //console.log(window.location.href = window.location.href + 'home')
          } else {
            navigation.navigate('Home');
          }
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
      ToastAndroid.show('Não foi possivel conectar ao Servidor!', ToastAndroid.LONG)      
    }
  }
  async function pegarValor(){
    const myuser = await AsyncStorage.getItem('token')
    console.log(myuser?.replace(/"/g, ''))
    if(myuser){
      loadUser(myuser?.replace(/"/g, ''))
    }
    
  }
  useEffect(() => {
    pegarValor()
    console.log('token')
    console.log(token)
    // if(token){
    //   navigation.navigate('Home');
    // }
  }, [])
  return (
    <Background>
      <View style={styles.container}>    
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

        <View style={styles.content}>


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
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              value={senha}
              onChangeText={(text) => setSenha(text)}
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