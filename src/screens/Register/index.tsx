import React from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles';


export function Register() {
  return (
    <View style={styles.container}>
      <Text>
        Try editing me! 🎉
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
          defaultValue="You can type in me"
        />

        <RectButton>
          <Text>
            Cadastrar
          </Text>
        </RectButton>
      </View>
  )
}