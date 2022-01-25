import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function ButtonBack() {
  return (
    <RectButton 
      style={styles.container}
    >
      <MaterialCommunityIcons 
        name="keyboard-backspace"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}