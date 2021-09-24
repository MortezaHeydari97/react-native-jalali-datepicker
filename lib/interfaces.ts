import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { PickerInputProps, PickerLabelProps } from './types';


export interface DatepickerProps extends PickerInputProps {
    // input
    label?: string
    format?: string

    // more props
    labelProps?: PickerLabelProps

    containerStyle?: StyleProp<ViewStyle>
    inputContainerStyle?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>

    // methods
    onChange?: (date: string) => void


    // ==================== Datepicker Header ====================
    backChevronIconComponent?: () => React.ReactNode
    nextChevronIconComponent?: () => React.ReactNode


}