import * as React from 'react';

import { scrollToTop } from 'blog/common/helpers';
import { ErrorBox } from 'blog/components/ErrorBox';
import { Label } from 'blog/components/Label';
import { Entry, EntryInterface } from 'blog/containers/Entry';

interface EntriesListPropsInterface extends React.Props<any> {
  entries: EntryInterface[];
  fullEntry: boolean;
}

export class EntriesList extends React.Component<EntriesListPropsInterface> {
  componentDidMount() {
    scrollToTop();
  }

  render() {
    const { entries, fullEntry } = this.props;

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
  }
}

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
