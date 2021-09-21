import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { PickerInputProps, PickerLabelProps } from './types';


export interface DatepickerProps extends PickerInputProps {
    label?: string
    format?: string

    // more props
    labelProps?: PickerLabelProps

    containerStyle?: StyleProp<ViewStyle>
    inputContainerStyle?: StyleProp<ViewStyle>
    labelStyles?: StyleProp<TextStyle>

    // methods
    onChange: (date: string) => void
}