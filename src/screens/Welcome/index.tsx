
import React from 'react';
import { View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavOpen } from '../../components/NavOpen';

export function Welcome() {

  let ROMTEC = 'https://projetos.42dias.com.br/romtec/#/'

  /*
  if(ROMTEC) {
    alert('oi')
  } else {
    ROMTEC != 'https://projetos.42dias.com.br/romtec/#/home'
    alert('oi home')
  }
  */

  return (
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