import React from 'react';
import {
    I18nManager,
    TextInput as Input,
    Modal,
    Text,
    ScrollView,
    TouchableOpacity,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
    Image,
    Pressable
} from 'react-native';
import styles from './styles';
import moment from 'jalali-moment';
import { months, weekDays } from '../utils/utils';
import type { PickerInputProps, PickerLabelProps } from './types';



interface DatepickerProps extends PickerInputProps {
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
export const Datepicker: React.FC<DatepickerProps> = ({format = 'jYYYY/jMM/jDD', ...props}) => {
    const chevron = require('./chevron.png')

    // states
    const [open, setOpen] = React.useState<boolean>(false)
    const [selectedDate, setSelectedDate] = React.useState<string>('')

    const [day, setDay] = React.useState<number>(moment().jDate())
    const [monthIndex, setMonthIndex] = React.useState<number>(moment().locale('fa').jMonth())
    const [monthDays, setMonthDays] = React.useState<Array<number>>([])
    const [month, setMonth] = React.useState<string>(months()[monthIndex].label)
    const [monthView, setMonthView] = React.useState<boolean>(false)
    const [year, setYear] = React.useState<number>(moment().locale('fa').jYear())
    const [yearsView, setYearsView] = React.useState<boolean>(false)


    React.useEffect(() => {
        defaultConfigs()
    }, [])


    const defaultConfigs = () => {
        let dt = moment(`${year}/${monthIndex+1 > 10 ? monthIndex+1 : '0'+(monthIndex+1)}`, 'jYYYY/jMM').startOf('jMonth').weekday()

        let offsetDays = Array.from({length: weekDays()[dt + 1 >= 6 ? 0 : dt+1].value}, (v, i) => 0)
        let realDays = Array.from({length: moment.jDaysInMonth(year, monthIndex)}, (v, i) => i+1)
        let allDays: Array<number> = weekDays()[dt + 1 >= 6 ? 0 : dt+1].value > 0 ? offsetDays.concat(realDays) : realDays

        setMonthDays(allDays)
    }


    // Open popup
    const openDatepicker = () => { setOpen(true) }

    // Close popup
    const closeDatepicker = () => {
        setYearsView(false)
        setMonthView(false)
        setOpen(false)
    }

    // Set data for last month
    const lastMonth = () => {
        let m = monthIndex > 0 ? monthIndex - 1 : 11
        monthIndex === 0 && setYear(year-1)
        setMonthIndex(m)
        setMonth(months()[m].label)

        let dt = moment(`${monthIndex === 0 ? year-1 : year}/${m+1 >= 10 ? m+1 : '0'+(m+1)}`, 'jYYYY/jMM').startOf('jMonth').weekday()

        let offsetDays = Array.from({length: weekDays()[dt + 1 > 6 ? 0 : dt+1].value}, (v, i) => 0)
        let realDays = Array.from({length: moment.jDaysInMonth(monthIndex === 0 ? year-1 : year, m)}, (v, i) => i+1)
        let allDays: Array<number> = offsetDays.concat(realDays)

        setMonthDays(allDays)
    }

    // Set data for next month
    const nextMonth = () => {
        let m = monthIndex < 11 ? monthIndex + 1 : 0
        monthIndex === 11 && setYear(year+1)
        setMonthIndex(m)
        setMonth(months()[m].label)

        let dt = moment(`${monthIndex === 11 ? year + 1 : year}/${m+1 >= 10 ? m+1 : '0'+(m+1)}`, 'jYYYY/jMM').startOf('jMonth').weekday()

        let offsetDays = Array.from({length: weekDays()[dt+1 > 6 ? 0 : dt+1].value}, (v, i) => 0)
        let realDays = Array.from({length: moment.jDaysInMonth(monthIndex === 11 ? year + 1 : year, m)}, (v, i) => i+1)
        let allDays: Array<number> = offsetDays.concat(realDays)

        setMonthDays(allDays)
    }


    const updateYear = (yearNm: number) => {
        setYear(yearNm)
        setMonth(months()[monthIndex].label)

        let dt = moment(`${yearNm}/${monthIndex >= 10 ? monthIndex : '0'+(monthIndex)}`, 'jYYYY/jMM').startOf('jMonth').weekday()

        let offsetDays = Array.from({length: weekDays()[dt+1 > 6 ? 0 : dt+1].value}, (v, i) => 0)
        let realDays = Array.from({length: moment.jDaysInMonth(yearNm, monthIndex+1)}, (v, i) => i+1)
        let allDays: Array<number> = offsetDays.concat(realDays)

        setMonthDays(allDays)

        setYearsView(false)
    }


    const updateMonth = (monthNm: number) => {
        let m = months()[monthNm-1]

        setYear(year)
        setMonthIndex(m.value)
        setMonth(m.label)

        let dt = moment(`${year}/${m.value >= 10 ? m.value : '0'+(m.value)}`, 'jYYYY/jMM').startOf('jMonth').weekday()

        let offsetDays = Array.from({length: weekDays()[dt+1 > 6 ? 0 : dt+1].value}, (v, i) => 0)
        let realDays = Array.from({length: moment.jDaysInMonth(year, m.value)}, (v, i) => i+1)
        let allDays: Array<number> = offsetDays.concat(realDays)

        setMonthDays(allDays)

        setMonthView(false)
    }



    const setValue = () => {
        setSelectedDate(`${year} / ${monthIndex+1 >= 10 ? monthIndex+1 : '0'+(monthIndex+1) } / ${day >= 10 ? day : '0'+(day)}`)
        props.onChange(`${year}/${monthIndex+1 >= 10 ? monthIndex+1 : '0'+(monthIndex+1) }/${day >= 10 ? day : '0'+(day)}`)
        setOpen(false)
    }

    const cancel = () => {
        setOpen(false)
    }


    const renderYears = React.useCallback(
        () => {
            return (
                <ScrollView contentContainerStyle={styles.yearsContainer}>
                    {
                        Array.from({length: 100}, (v , i) => moment().jYear()-99+i).reverse().map((y, index) => {
                            return <View key={index} style={styles.yearCell}>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => updateYear(y)}>
                                    <Text style={styles.yearCellTitle}> {y} </Text>
                                </TouchableOpacity>
                            </View>
                        })
                    }
                </ScrollView>
            )
        },
        [year]
    )

    const renderMonths = React.useCallback(
        () => {
            return (
                <View style={styles.yearsContainer}>
                    {
                        months().map((m, index) => {
                            return <View key={index} style={styles.yearCell}>
                                <Text style={styles.yearCellTitle} onPress={() => updateMonth(m.value)}> {m.label} </Text>
                            </View>
                        })
                    }
                </View>
            )
        },
        [month]
    )

    return (
        <View style={props.containerStyle}>

            {/* input label */}
            {
                props.label &&
                <Text
                    {...props.labelProps}
                    children={props.label}
                    style={props.labelStyles}
                    />
            }

            {/* picker */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.calendarContainer, props.inputContainerStyle]}
                onPress={openDatepicker}>

                <Input
                    {...props}
                    onChange={() => {}}
                    editable={false}
                    defaultValue={selectedDate}
                    onChangeText={() => {}}
                    />

                <Modal
                    visible={open}
                    animationType="slide"
                    onRequestClose={closeDatepicker}>

                    {/* Years list view */}
                    { yearsView && renderYears() }


                    {/* Months list view */}
                    { monthView && renderMonths() }


                    {/* Calendar container */}
                    {
                        (!yearsView && !monthView) && <View style={styles.datepickerContainer}>

                            {/* Header */}
                            <View style={styles.datepickerHeader}>
                                <Pressable onPress={lastMonth}>
                                    <Image
                                        source={chevron}
                                        style={[styles.chevron, {transform: [{rotate: '180deg'}]}]}
                                        />
                                </Pressable>

                                <View style={{flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse'}}>
                                    <Text style={styles.calendarHeaderTitle} onPress={() => setMonthView(true)}> {month} </Text>
                                    <Text style={styles.calendarHeaderTitle} onPress={() => setYearsView(true)}> {year} </Text>
                                </View>

                                <Pressable onPress={nextMonth}>
                                    <Image
                                        source={chevron}
                                        style={styles.chevron}
                                        />
                                </Pressable>
                            </View>


                            {/* Selected Date */}
                            <View style={styles.selectedDateContainer}>
                                <Text style={styles.selectedDate}>
                                    {`${day < 10 ? '0' + day : day} ${month} ${year}`}
                                </Text>
                            </View>


                            {/* Week Days */}
                            <View style={styles.weekDaysContainer}>
                                {
                                    weekDays().map(weekDay => {
                                        return <Text key={weekDay.value} style={styles.weekDay}> {weekDay.label} </Text>
                                    })
                                }
                            </View>


                            {/* Body */}
                            <View style={styles.calendarBody}>
                                {
                                    monthDays.map((dayItem, index) => {
                                        return dayItem === day ?
                                            <Text key={index} style={[styles.dayCell, {color: 'red'}]} onPress={() => dayItem > 0 && setDay(dayItem)}> {dayItem} </Text> :
                                            <React.Fragment key={index}>
                                                {
                                                    year === moment().jYear() && monthIndex === moment().jMonth() && dayItem === moment().jDate() ?
                                                        <Text style={[styles.dayCell, styles.today]} onPress={() => dayItem > 0 && setDay(dayItem)}> {dayItem} </Text> :
                                                        <Text style={[styles.dayCell, {opacity: dayItem > 0 ? 1 : 0}]} onPress={() => dayItem > 0 && setDay(dayItem)}> {dayItem} </Text>
                                                }
                                            </React.Fragment>
                                    })
                                }
                            </View>


                            {/* Footer */}
                            <View style={styles.calendarFooter}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.actionBtn}
                                    onPress={setValue}>
                                    <Text style={styles.actionButtonLabel}> انتخاب تاریخ </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.actionBtn}
                                    onPress={cancel}>
                                    <Text style={styles.actionButtonLabel}> لغو </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                </Modal>
            </TouchableOpacity>
        </View>
    )
}