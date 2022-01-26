import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles';
import { Background } from '../../components/Background'
import { useForm, Controller } from "react-hook-form"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../global/styles/theme';

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

  const onSubmit = ({data}: FormData) => {
    console.log(data)
  }
  const navigation = useNavigation();

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

        <Text style={styles.label}>Nome</Text>
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
          />
        )}
        name="password"
      />

          <RectButton 
            style={styles.containerButtonregister} 
            onPress={() => handleSubmit(onSubmit)}
          >
            <Text style={styles.titleButtonRegister}>
              Cadastrar
            </Text>
          </RectButton>
      </View>
    </Background>
  )
}