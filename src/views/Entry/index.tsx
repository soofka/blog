import * as React from 'react';

import RoutingProvider from 'common/RoutingProvider';

import { Entries, EntriesParamsInterface, EntriesPropsInterface } from 'views/Entries';
import { EntryInterface } from 'containers/Entry';

export class Entry extends Entries {
  constructor(props: EntriesPropsInterface) {
    super(props);
    this.state = {
      entriesResponse: null,
      isEntryFull: true,
    };
  }

  filterEntries(entries: EntryInterface[], params: EntriesParamsInterface): EntryInterface[] {
    const { niceUrl } = params;

    /* tslint:disable-next-line */
    for (let entry of entries) {
      if (RoutingProvider.parseTextToNiceUrl(entry.title) === niceUrl) {
        return [entry];
      }
    }
    return [];
  }
}

export default Entry;
