import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

export function HeaderRightIcon(props: Props) {
  const colorScheme = useColorScheme();
  const { name } = props;

  return (
    <FontAwesome
      name={name}
      size={25}
      color={Colors[colorScheme].text}
      style={{ marginRight: 15 }}
    />
  );
}

type Props = {
  name: IconProps<any>['name'];
};
