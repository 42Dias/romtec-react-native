import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { registers } from '../../utils/registers';

import { CategoryRegister } from '../CategoryRegister';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelectRegister({ 
  categorySelected, 
  setCategory,
  hasCheckBox = false,
}: Props){
  
  return(
    <ScrollView
      horizontal
      style={styles.container}  
      showsHorizontalScrollIndicator={false}  
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        registers.map(category => (
          <CategoryRegister 
            key={category.id}
            title={category.title}
            desc={category.desc}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckBox={hasCheckBox}
          />
        ))
      }
    </ScrollView>
  );
}