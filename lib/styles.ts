import { I18nManager, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    yearsContainer: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        flexWrap: 'wrap',
    },

    yearCell: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        height: 80
    },
    yearCellTitle: {
        fontSize: 18
    },

    calendarContainer: {
        borderWidth: 0.5,
        borderRadius: 15,
        marginVertical: 5,
        height: 55
    },

    monthChange: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight: '100',
        fontSize: 15
    },

    datepickerContainer: {
        height: '100%',
        maxHeight: '100%'
    },
    datepickerHeader: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    calendarHeaderTitle: {
        fontSize: 20
    },
    chevron: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    selectedDateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    selectedDate: {
        fontSize: 15,
        direction: 'rtl',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    weekDaysContainer: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    weekDay: {
        color: '#000',
        fontSize: 11,
        width: '14.2%',
        textAlign: 'center',
    },

    calendarBody: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginBottom: 'auto'
    },
    dayCell: {
        width: '14.2%',
        textAlign: 'center',
        borderRadius: 10,
        height: 40,
        paddingTop: 10,
        fontSize: 15
    },

    today: {
        backgroundColor: 'red'
    },


    calendarFooter: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    actionBtn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15
    },
    actionButtonLabel: {
        fontSize: 15
    }
})


export default styles