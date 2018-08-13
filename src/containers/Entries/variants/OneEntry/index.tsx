import * as React from 'react';

import RoutingProvider from 'common/RoutingProvider';

import { Entries, EntriesParamsInterface, EntriesPropsInterface } from 'containers/Entries';
import { EntryInterface } from 'containers/Entry';

export class OneEntry extends Entries {
  constructor(props: EntriesPropsInterface) {
    super(props);
  }

  filterEntries(entries: EntryInterface[], params: EntriesParamsInterface): EntryInterface[] {
    const { niceUrl } = params;

    for (const entry of entries) {
      if (RoutingProvider.parseTextToNiceUrl(entry.title) === niceUrl) {
        return [entry];
      }
    }

    return [];
  }

  isEntryFull(): boolean {
    return true;
  }
}

export default OneEntry;
