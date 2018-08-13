import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoadingCover from 'components/LoadingCover';
import ErrorBox from 'components/ErrorBox';
import EntriesList from 'components/EntriesList';

import { EntryInterface } from 'containers/Entry';

import AssetsProvider from 'common/AssetsProvider';
import LabelsProvider from 'common/LabelsProvider';
import RequestHandler, { RequestHandlerResponseInterface } from 'common/RequestHandler';

export interface EntriesParamsInterface {
  tag?: string;
  date?: string;
  niceUrl?: string;
}

export interface EntriesPropsInterface extends RouteComponentProps<EntriesParamsInterface> {
  language: string;
}

interface EntriesStateInterface {
  entries: EntryInterface[];
  loading: boolean;
}

export class Entries extends React.Component<EntriesPropsInterface, EntriesStateInterface> {
  constructor(props: EntriesPropsInterface) {
    super(props);
    this.state = { entries: undefined, loading: false };
  }

  componentDidMount() {
    if (!this.state.entries) {
      this.getEntries();
    }
  }

  componentDidUpdate(prevProps: EntriesPropsInterface) {
    if (this.props.language !== prevProps.language) {
      this.getEntries();
    }
  }

  getEntries() {
    this.setState({ loading: true });
    AssetsProvider
      .getEntries(this.props.language)
      .then((response: RequestHandlerResponseInterface) => {
        const entries = RequestHandler.validateResponse(response) ? response.data : undefined;
        this.setState({ entries, loading: false });
      });
  }

  render() {
    const { language, match: { params } } = this.props;
    const { entries, loading } = this.state;

    if (loading) {
      return (
        <LoadingCover />
      );
    }

    if (!entries) {
      return (
        <ErrorBox
          language={language}
          message={LabelsProvider.getLabel('errors__no_entries_in_db', language)}
        />
      );
    }

    const entriesFiltered = this.filterEntries(
      prepareEntries(entries),
      params,
    );

    return (
      <EntriesList
        language={language}
        entries={entriesFiltered}
        fullEntry={this.isEntryFull()}
      />
    );
  }

  filterEntries(entries: EntryInterface[], params: EntriesParamsInterface): EntryInterface[] {
    return entries;
  }

  isEntryFull(): boolean {
    return false;
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
