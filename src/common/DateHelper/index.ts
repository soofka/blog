export class DateHelper {
  static parseNiceUrlYear(year: string): number {
    return parseInt(year, 10);
  }

  static parseNiceUrlYearMonth(yearMonth: string): { year: number, month: number } {
    const year = DateHelper.parseNiceUrlYear(yearMonth.substring(0, 4));
    const month = parseInt(yearMonth.substring(4, 6), 10);
    return { year, month };
  }

  static parseNiceUrlYearMonthDay(yearMonthDay: string)
      : { year: number, month: number, day: number } {
    const { year, month } = DateHelper.parseNiceUrlYearMonth(yearMonthDay.substring(0, 6));
    const day = parseInt(yearMonthDay.substring(6, 8), 10);
    return { year, month, day };
  }

  static parseJsonDateToNiceUrlDate(jsonDate: string) {
    return jsonDate.replace('-', '');
  }
}

export default DateHelper;
