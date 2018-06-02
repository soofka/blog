import * as React from 'react';

import ErrorBox from 'components/ErrorBox';
import { Entry, EntryInterface } from 'containers/Entry';

interface EntriesListPropsInterface extends React.Props<any> {
  entries: EntryInterface[];
  isEntryFull: boolean;
}

export const EntriesList = (props: EntriesListPropsInterface) => {
  const { entries, isEntryFull } = props;
  return (
    <div>
      {entries.length === 0 &&
        <ErrorBox
          message="Sorry, there are no entries matching your query."
        />}
      {entries.sort(sortEntriesByDateCreated).map((entry: EntryInterface, index: number) => {
        return (
          <Entry
            key={index}
            title={entry.title}
            tags={entry.tags}
            brief={entry.brief}
            created={entry.created}
            updated={entry.updated}
            contentFileName={entry.contentFileName}
            isFull={isEntryFull}
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
