/**
 * @description Use to get all week days
 * @returns Array<label: string, value: number>
 */
export const weekDays = (): Array<{label: string, value: number}> => {
    const days: Array<{label: string, value: number}> = [
        {label: 'شنبه', value: 0},
        {label: 'یکشنبه', value: 1},
        {label: 'دوشنبه', value: 2},
        {label: 'سه شنبه', value: 3},
        {label: 'چهارشنبه', value: 4},
        {label: 'پنج شنبه', value: 5},
        {label: 'جمعه', value: 6}
    ]

    return days
}



/**
 * @description Use to get all jalali months
 * @returns Array<label: string, value: number>
 */
export const months = (): Array<{label: string, value: number}> => {
    const months: Array<{label: string, value: number}> = [
        {label: 'فروردین', value: 1},
        {label: 'اردیبهشت', value: 2},
        {label: 'خرداد', value: 3},
        {label: 'تیر', value: 4},
        {label: 'مرداد', value: 5},
        {label: 'شهریور', value: 6},
        {label: 'مهر', value: 7},
        {label: 'آبان', value: 8},
        {label: 'آذر', value: 9},
        {label: 'دی', value: 10},
        {label: 'بهمن', value: 11},
        {label: 'اسفند', value: 12}
    ]
    return months
}