import React, { useState } from 'react';
import { Image, View, Text, ScrollView, Alert, Modal, StyleSheet, Pressable } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import CloseIcon from './../../assets/close-icon.png';
import DeleteIcon from './../../assets/delete.png';
import EditIcon from './../../assets/edit.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import { NavClose } from '../../components/NavClose';

import { RectButton, TextInput } from 'react-native-gesture-handler';

const configs = ["Config1", "Config2", "Config3", "Config4"]

export function Crossings() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  function PhasesScreen() {
    navigation.navigate('Phases');
  }

  return (
    <>
    <Background>   
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }
        }>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}>
                    <Image 
                      source={CloseIcon} 
                      // style={styles.image} 
                      resizeMode="cover"
                    /> 
                </Pressable>
                <RectButton 
                  style={styles.containerButtonInput} 
                >
                  <TextInput
                    style={styles.titleButton}
                    placeholder="Nome do cliente"
                    placeholderTextColor="#fff"
                  />
                </RectButton>

                <RectButton 
                  style={styles.containerButtonInput} 
                >
                  <TextInput
                    style={styles.titleButton}
                    placeholder="Nome da travessia"
                    placeholderTextColor="#fff"
                  />
                </RectButton>

                <RectButton 
                  style={styles.containerButtonInput} 
                >
                  <TextInput
                    style={styles.titleButton}
                    placeholder="Descrição"
                    placeholderTextColor="#fff"
                  />
                </RectButton>

                <SelectDropdown
                  data={configs}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                />

                <RectButton style={styles.btnAddModal}><Text>Adicionar</Text></RectButton>

              </View>
            </View>
        </Modal>
      </View>

      <ScrollView> 
        <View style={styles.container}> 
          <View style={styles.content}> 
            <Text style={styles.title}>Travessias</Text>
            <Pressable style={styles.containerButtonBackOi} onPress={() => setModalVisible(true)}>
              <Text style={styles.titleButtonOi}>Criar</Text>
            </Pressable>
          </View> 

          <View style={styles.containerButtonCrosssings}>
            <Text style={styles.titlePhases}>Traves siaasd asd asdadasd asdasdas número 1</Text>

            <View style={styles.flexContent}>
              <RectButton onPress={PhasesScreen} style={styles.btnExec}><Text style={styles.btnTitle}>Executar</Text></RectButton>
              <Image 
                source={EditIcon} 
                resizeMode="contain"
                style={styles.icon}
              />
              <Image 
                source={DeleteIcon} 
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <NavClose />
    </Background>
    </>
  );
}