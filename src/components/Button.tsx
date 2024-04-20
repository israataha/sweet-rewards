import React from 'react';
import { Pressable, PressableProps, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

interface ButtonProps extends PressableProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

export const Button = (buttonProps: ButtonProps) => {
  return (
    <Pressable style={[styles.pillButton, buttonProps.buttonStyle]}>
      <Text style={[styles.text, buttonProps.textStyle]}>{buttonProps.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pillButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderColor: colors.accentGreen,
    borderRadius: 25,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  text: {
    color: colors.accentGreen,
    fontSize: 13,
    fontWeight: '600',
  },
});
