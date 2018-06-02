import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { AssetsProvider, AssetsProviderResponse } from 'common/AssetsProvider';

import LoadingCover from 'components/LoadingCover';
import ErrorBox from 'components/ErrorBox';
import EntriesList from 'components/EntriesList';

import { EntryInterface } from 'containers/Entry';

export interface EntriesParamsInterface {
  tag?: string;
  date?: string;
  niceUrl?: string;
}

export interface EntriesPropsInterface extends RouteComponentProps<EntriesParamsInterface > {}

interface EntriesStateInterface {
  entriesResponse: AssetsProviderResponse;
  isEntryFull: boolean;
}

export class Entries extends React.Component<EntriesPropsInterface, EntriesStateInterface> {
  constructor(props: EntriesPropsInterface) {
    super(props);
    this.state = {
      entriesResponse: null,
      isEntryFull: false,
    };
  }

  componentDidMount() {
    AssetsProvider.getEntries().then((response: AssetsProviderResponse) => {
      this.setState({
        entriesResponse: response,
      });
    });
  }

  render() {
    const { entriesResponse, isEntryFull } = this.state;

    const isValidResponse = entriesResponse !== null;
    const isSuccessResponse = isValidResponse && entriesResponse.status === 200;

    if (!isValidResponse) {
      return (
        <LoadingCover />
      );
    }

    if (!isSuccessResponse) {
      return (
        <ErrorBox
          message="Oops. Entries database crashed. Please try again."
        />
      );
    }

    const entries = this.filterEntries(
      prepareEntries(entriesResponse.data),
      this.props.match.params,
    );

    return (
      <EntriesList
        entries={entries || []}
        isEntryFull={isEntryFull || false}
      />
    );
  }

  filterEntries(entries: EntryInterface[], params: EntriesParamsInterface): EntryInterface[] {
    return entries;
  }
}

function prepareEntries(entries: EntryInterface[]): EntryInterface[] {
  return filterPrivateEntries(entries);
}

function filterPrivateEntries(entries: EntryInterface[]): EntryInterface[] {
  return entries.filter((entry: EntryInterface) => {
    return entry.isPublic === true;
  });
}

export default Entries;
