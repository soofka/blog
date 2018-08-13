import * as React from 'react';

import ErrorBox from 'components/ErrorBox';
import { Entry, EntryInterface } from 'containers/Entry';

import LabelsProvider from 'common/LabelsProvider';

interface EntriesListPropsInterface extends React.Props<any> {
  entries: EntryInterface[];
  language: string;
  fullEntry: boolean;
}

export const EntriesList = (props: EntriesListPropsInterface) => {
  const { language, entries, fullEntry } = props;

  return (
    <div>
      {entries.length === 0 &&
        <ErrorBox
          language={language}
          message={LabelsProvider.getLabel('errors__no_entries_matching_query', language)}
        />}
      {entries.sort(sortEntriesByDateCreated).map((entry: EntryInterface, index: number) => {
        return (
          <Entry
            key={index}
            {...entry}
            language={language}
            full={fullEntry}
          />
        );
      })}
    </div>
  );
};

function sortEntriesByDateCreated(entryA: EntryInterface, entryB: EntryInterface): number {
  const entryADateCreated = new Date(entryA.created);
  const entryBDateCreated = new Date(entryB.created);

  if (entryADateCreated > entryBDateCreated) {
    return -1;
  }

  if (entryADateCreated < entryBDateCreated) {
    return 1;
  }

  return 0;
}

export default EntriesList;
