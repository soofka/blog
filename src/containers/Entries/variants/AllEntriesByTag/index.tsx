import * as React from 'react';
import { inject } from 'mobx-react';

import RoutingProvider from 'common/RoutingProvider';

import { Entries, EntriesParamsInterface } from 'containers/Entries';
import { EntryInterface } from 'containers/Entry';

export class AllEntriesByTag extends Entries {
  filterEntries(entries: EntryInterface[], params: EntriesParamsInterface): EntryInterface[] {
    const { tag } = params;

    return entries.filter((entry: EntryInterface) => {
      return entry.tags.map((entryTag: string) =>
        RoutingProvider.parseTextToNiceUrl(entryTag)).indexOf(prepareTag(tag)) >= 0;
    });
  }
}

function prepareTag(tag: string): string {
  return tag.trim().toLowerCase();
}

export default inject('languageStore')(AllEntriesByTag as any);
