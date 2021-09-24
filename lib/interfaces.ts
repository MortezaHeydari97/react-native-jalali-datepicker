import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { PickerInputProps, PickerLabelProps } from './types';


interface WeekModel {
    label: string
    value: string
}


export interface DatepickerProps extends PickerInputProps {
    // input
    label?: string
    format?: string

    // more props
    labelProps?: PickerLabelProps
    weekDaysLables?: WeekModel[]

    // styles
    containerStyle?: StyleProp<ViewStyle>
    inputContainerStyle?: StyleProp<ViewStyle>
    inputStyle?: StyleProp<TextStyle>
    labelStyle?: StyleProp<TextStyle>

    weekDaysStyles?: StyleProp<TextStyle>

    // methods
    onChange?: (date: string) => void


    // ==================== Datepicker Header ====================
    backChevronIconComponent?: () => React.ReactNode
    nextChevronIconComponent?: () => React.ReactNode


}