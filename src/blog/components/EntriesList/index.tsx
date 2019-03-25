import * as React from 'react';

import { scrollToTop } from 'blog/common/helpers';
import { EntryBrief } from 'blog/components/EntryBrief';
import { EntryHeader } from 'blog/components/EntryHeader';
import { ErrorBox } from 'blog/components/ErrorBox';
import { Label } from 'blog/components/Label';
import { EntryInterface } from 'common/types';
import { StyledEntryListItem } from './styled';

interface EntriesListPropsInterface extends React.Props<any> {
  entries: EntryInterface[];
}

export class EntriesList extends React.Component<EntriesListPropsInterface> {
  componentDidMount() {
    scrollToTop();
  }

  render() {
    const { entries } = this.props;

    return (
      <div>
        {entries.length === 0 &&
        <ErrorBox
          message={<Label name="errors__no_entries_matching_query"/>}
        />}
        {entries.sort(sortEntriesByDateCreated).map((entry: EntryInterface, index: number) =>
          <StyledEntryListItem key={index}>
            <EntryHeader
              title={entry.title}
              titleLink={entry.niceUrl}
              tags={entry.tags}
              created={entry.created}
              updated={entry.updated}
            />
            <EntryBrief
              text={entry.brief}
              imageUrl={entry.imageUrl}
              moreButtonLink={entry.niceUrl}
            />
          </StyledEntryListItem>,
        )}
      </div>
    );
  }
}

const sortEntriesByDateCreated = (entryA: EntryInterface, entryB: EntryInterface): number => {
  const entryADateCreated = new Date(entryA.created);
  const entryBDateCreated = new Date(entryB.created);

  if (entryADateCreated > entryBDateCreated) {
    return -1;
  }

  if (entryADateCreated < entryBDateCreated) {
    return 1;
  }

  return 0;
};
