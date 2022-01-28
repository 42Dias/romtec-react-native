import React, { useState } from 'react'
import { Text, View, TextInput, ToastAndroid } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles';
import { Background } from '../../components/Background'
import { useForm, Controller } from "react-hook-form"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../global/styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ip } from '../../services/api';

type FormData = {
  data: string,
  name: string,
  email: string,
  password: string,
}

export function Register() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  })
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  // const onSubmit = ({ data }: FormData) => {
  //   console.log(data)
  // }
  const navigation = useNavigation();
  function HomePage() {
    const data = {
      email: email,
      password: senha
    }
    //navigation.navigate('Home');
    console.log(data)
    Cadastro(data)
  }
  function handleAsyncStorage (emailA: string, passwordB: string) {
    AsyncStorage.setItem('email', JSON.stringify(emailA))// saves client's data into AsyncStorage:
    AsyncStorage.setItem('password', JSON.stringify(passwordB))// saves client's data into AsyncStorage:
    console.log()
  }
  function handleAsyncStorageToken (token: string[]) {
    const setAsyncStorage = (data: string[]) => {
      AsyncStorage.setItem('token', JSON.stringify(data)) // saves client's data into AsyncStorage:
      console.log('OK!!!')
    }
    setAsyncStorage(token)
    loadUser(token)
  }

  async function Cadastro (submit:any) {
    setLoading(true)
    const responser = axios.post(ip + ':8145/api/auth/sign-up', {
      nome: submit.name,
      email: submit.email,
      password: submit.password,

    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        ToastAndroid.show('Cadastro realizado com sucesso!', ToastAndroid.LONG)
        handleAsyncStorage(submit.email, submit.password)
        handleAsyncStorageToken(response.data)
      } else if (response.statusText === 'Forbidden') {
        ToastAndroid.show('Ops, Não tem permisão!', ToastAndroid.LONG)
        setLoading(false)
      } else {
        ToastAndroid.show('Ops, Dados Incorretos!', ToastAndroid.LONG)
        setLoading(false)
      }
    }).catch(res => {
      console.log(responser)
      ToastAndroid.show(res.response.data, ToastAndroid.LONG)
      setLoading(false)
    })
  }
  async function loadUser (token:any) {
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
      navigation.navigate('Home');
      return response.data
    })
    console.log(response)
    // console.log(response.tenants[0].roles[0]);
    // AsyncStorage.setItem("roles", JSON.stringify(response.tenants[0].roles[0]));//saves client's data into AsyncStorage:
    // console.log(response.tenants[0].tenant.id);
    // AsyncStorage.setItem("tenantId", JSON.stringify(response.tenants[0].tenant.id));//saves client's data into AsyncStorage:
    AsyncStorage.setItem('roles', JSON.stringify(response.tenants[0].roles[0]))// saves client's data into AsyncStorage:
    // console.log(response.tenants[0].tenant.id);
    AsyncStorage.setItem('tenantId', JSON.stringify(response.tenants[0].tenant.id))// saves client's data into AsyncStorage:
    AsyncStorage.setItem('id', JSON.stringify(response.id))// saves client's data into AsyncStorage:
    AsyncStorage.setItem('nome', JSON.stringify(response.firstName))
  // AsyncStorage.setItem("status", JSON.stringify(response.tenants[0].status));//saves client's data into AsyncStorage:
  }
  function WelcomePage() {
    navigation.navigate('Welcome');
  }

  return (
    <Background>
      <View style={styles.container}>
        <RectButton 
          onPress={WelcomePage}
          style={styles.containerButtonBack} 
        >
          <MaterialCommunityIcons 
            name="keyboard-backspace"
            size={24}
            color={theme.colors.yellow}
          />
        </RectButton>
          
        <Text 
          style={styles.title} 
        >
          Cadastro
        </Text>

        {/* <Text style={styles.label}>Nome</Text>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}

      <Text style={styles.label}>E-mail</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      <Text style={styles.label}>Senha</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      /> */}
        <RectButton
          style={styles.containerButton}
        >
          <TextInput
            style={styles.titleButton}
            placeholder="Nome"
            placeholderTextColor="#fff"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </RectButton>

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
          style={styles.containerButtonregister}
          onPress={() => HomePage()}
        >
          <Text style={styles.titleButtonRegister}>
            Cadastrar
          </Text>
        </RectButton>
      </View>
    </Background>
  )
}