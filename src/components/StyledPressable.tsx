import React from 'react';
import { Pressable } from 'react-native';

export const StyledPressable = (props: Props) => (
  <Pressable
    onPress={props.onPress}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}>
    {props.children}
  </Pressable>
);

type Props = {
  onPress: () => void;
  children: React.ReactNode | any;
}
