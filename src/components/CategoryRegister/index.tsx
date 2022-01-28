import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  desc: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function CategoryRegister({
  title,
  desc,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props){
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return(
    <RectButton {...rest}>
      <View
        style={styles.container}
      >
        <View 
          style={[styles.content]}
        >
          <Icon 
            width={247} 
            height={194}
            style={styles.image}
          />
        </View>
      </View>
    </RectButton>
  );
}