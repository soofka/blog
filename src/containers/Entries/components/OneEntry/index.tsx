import * as React from 'react';
import { inject } from 'mobx-react';

import RoutingProvider from 'common/RoutingProvider';

import { Entries, EntriesParamsInterface, EntriesPropsInterface } from 'containers/Entries';
import { EntryInterface } from 'containers/Entry';

export class OneEntry extends Entries {
  getMeta() {
    return null;
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

export default inject('languageStore')(OneEntry as any);
