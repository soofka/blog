import * as React from 'react';
import { inject } from 'mobx-react';

import DateHelper from 'common/DateHelper';

import { Entries, EntriesParamsInterface } from 'containers/Entries';
import { EntryInterface } from 'containers/Entry';

export class AllEntriesByDate extends Entries {
  filterEntries(entries: EntryInterface[], params: EntriesParamsInterface): EntryInterface[] {
    const { date } = params;

    const yearRegex = /^\d{4}$/;
    const yearMonthRegex = /^\d{6}$/;
    const yearMonthDayRegex = /^\d{8}$/;

    if (yearRegex.test(date)) {
      const year = DateHelper.parseNiceUrlYear(date);
      return getEntriesByYear(entries, year);
    }

    if (yearMonthRegex.test(date)) {
      const { year, month } = DateHelper.parseNiceUrlYearMonth(date);
      return getEntriesByYearMonth(entries, year, month);
    }

    if (yearMonthDayRegex.test(date)) {
      const { year, month, day } = DateHelper.parseNiceUrlYearMonthDay(date);
      return getEntriesByYearMonthDay(entries, year, month, day);
    }

    return [];
  }
}

function getEntriesByYear(entries: EntryInterface[], year: number): EntryInterface[] {
  return entries.filter((entry: EntryInterface) => {
    const dateCreatedNiceUrl = DateHelper.parseJsonDateToNiceUrlDate(entry.created);
    const dateCreatedObject = DateHelper.parseNiceUrlYearMonthDay(dateCreatedNiceUrl);
    return dateCreatedObject.year === year;
  });
}

function getEntriesByYearMonth(
  entries: EntryInterface[],
  year: number,
  month: number,
): EntryInterface[] {
  if (month < 1 || month > 12) {
    return [];
  }

  return getEntriesByYear(entries, year).filter((entry: EntryInterface) => {
    const dateCreatedNiceUrl = DateHelper.parseJsonDateToNiceUrlDate(entry.created);
    const dateCreatedObject = DateHelper.parseNiceUrlYearMonthDay(dateCreatedNiceUrl);
    return dateCreatedObject.month === month;
  });
}

function getEntriesByYearMonthDay(
  entries: EntryInterface[],
  year: number,
  month: number,
  day: number,
): EntryInterface[] {
  if (day < 1 || day > 31) {
    return [];
  }

  return getEntriesByYearMonth(entries, year, month).filter((entry: EntryInterface) => {
    const dateCreatedNiceUrl = DateHelper.parseJsonDateToNiceUrlDate(entry.created);
    const dateCreatedObject = DateHelper.parseNiceUrlYearMonthDay(dateCreatedNiceUrl);
    return dateCreatedObject.day === day;
  });
}

export default inject('languageStore')(AllEntriesByDate as any);
