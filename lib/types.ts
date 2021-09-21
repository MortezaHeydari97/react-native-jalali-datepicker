import { TextInputProps, TextProps } from 'react-native';


type UselessRNTextInputProps = 'onChange' | 'onChangeText' | 'style'
export type PickerInputProps = Omit<TextInputProps, UselessRNTextInputProps>


type UselessRNTextInputLabelProps = 'style'
export type PickerLabelProps = Omit<TextProps, UselessRNTextInputLabelProps>