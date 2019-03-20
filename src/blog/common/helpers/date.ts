export const parseNiceUrlYear = (year: string): number => {
  return parseInt(year, 10);
};

export const parseNiceUrlYearMonth = (yearMonth: string): { year: number, month: number } => {
  const year = parseNiceUrlYear(yearMonth.substring(0, 4));
  const month = parseInt(yearMonth.substring(4, 6), 10);
  return { year, month };
};

export const parseNiceUrlYearMonthDay = (yearMonthDay: string) : { year: number, month: number, day: number } => {
  const { year, month } = parseNiceUrlYearMonth(yearMonthDay.substring(0, 6));
  const day = parseInt(yearMonthDay.substring(6, 8), 10);
  return { year, month, day };
};
