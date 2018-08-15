import * as React from 'react';

import Label from 'components/Label';
import ErrorBox from 'components/ErrorBox';
import Entry, { EntryInterface } from 'containers/Entry';

interface EntriesListPropsInterface extends React.Props<any> {
  entries: EntryInterface[];
  fullEntry: boolean;
}

export const EntriesList = (props: EntriesListPropsInterface) => {
  const { entries, fullEntry } = props;

  return (
    <div>
      {entries.length === 0 &&
        <ErrorBox
          message={<Label name="errors__no_entries_matching_query"/>}
        />}
      {entries.sort(sortEntriesByDateCreated).map((entry: EntryInterface, index: number) => {
        return (
          <Entry
            key={index}
            {...entry}
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
