import React, { useState } from 'react';
import { Image, View, Text, ScrollView, Alert, Modal, StyleSheet, Pressable } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import CloseIcon from './../../assets/close-icon.png';
import CheckIcon from './../../assets/check.png';
import PlusIcon from './../../assets/plus.png';
import LockIcon from './../../assets/lock.png';
import PlayIcon from './../../assets/play.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import { NavClose } from '../../components/NavClose';

import { RectButton, TextInput } from 'react-native-gesture-handler';

const configs = ["Config1", "Config2", "Config3", "Config4"]

export function Phases() {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.title}>Travessia número 1</Text>
          </View> 

          <View style={styles.containerButtonCrosssings}>
            <View style={styles.flexContent}>
              <Image 
                source={CheckIcon} 
                resizeMode="contain"
              />
              <Text style={styles.titlePhasesNumber}>1</Text>
              <Text style={styles.titlePhases}>Etapa de limpeza</Text>
            </View>
          </View>

          <View style={styles.containerButtonCrosssings}>
            <View style={styles.flexContent}>
              <Image 
                source={PlayIcon} 
                resizeMode="contain"
              />
              <Text style={styles.titlePhases}>Etapa de limpeza</Text>
            </View>
          </View>

          <View style={styles.containerButtonCrosssings}>
            <View style={styles.flexContent}>
              <Image 
                source={LockIcon} 
                resizeMode="contain"
              />
              <Text style={styles.titlePhases}>Etapa de furo</Text>
            </View>
          </View>

          <View style={styles.containerButtonAdd}>
            <View style={styles.flexContent}>
              <Image 
                source={PlusIcon} 
                resizeMode="contain"
              />
              <Text style={styles.titlePhases}>Adicionar etapa</Text>
            </View>
          </View>

          {/* <RectButton 
            style={styles.containerButtonInput} 
          >
            <TextInput
              style={styles.titleButton}
              placeholder="Descrição"
              placeholderTextColor="#fff"
            />
          </RectButton> */}

        </View>
      </ScrollView>

      <NavClose />
    </Background>
    </>
  );
}