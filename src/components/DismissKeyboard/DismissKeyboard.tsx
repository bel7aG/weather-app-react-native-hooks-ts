import React, { FC, ReactNode } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

interface DismissKeyboardProps {
  children: ReactNode;
}

const DismissKeyboard: FC<DismissKeyboardProps> = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
