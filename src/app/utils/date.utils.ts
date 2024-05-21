const NUMBER_OF_MONTHS = 12;
export class DateUtils {


    public static getMonthLetters(): string[] {
        return ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    }

    public static isLeapYear(year: number): boolean {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    public static getDaysInMonth(month: number, year: number): number {
        if (month === 1) {
            return DateUtils.isLeapYear(year) ? 29 : 28;
        } else if ([0, 2, 4, 6, 7, 9, 11].includes(month)) {
            return 31;
        } else {
            return 30;
        }
    }

    public static getCalendar(year: number): (string | null)[][] {
        let calendar: (string | null)[][] = [];

        for (let indexMonth = 0; indexMonth < NUMBER_OF_MONTHS; indexMonth++) {
            let daysInMonth = DateUtils.getDaysInMonth(indexMonth, year);

            for (let indexDay = 0; indexDay < daysInMonth; indexDay++) {
                if (!calendar[indexMonth]) {
                    calendar[indexMonth] = new Array(daysInMonth);
                }
            }
        }

        return calendar;
    }
}