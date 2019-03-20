import { reaction } from 'mobx';
import { inject } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import AssetsProvider from 'common/AssetsProvider';
import RequestHandler, { RequestHandlerResponseInterface } from 'common/RequestHandler';

import { LanguageStoreInterface } from 'store/language';

import EntriesList from 'components/EntriesList';
import ErrorBox from 'components/ErrorBox';
import Label from 'components/Label';
import LoadingCover from 'components/LoadingCover';
import EntriesMeta from 'components/Meta/components/EntriesMeta';

import { EntryInterface } from 'containers/Entry';

export interface EntriesParamsInterface {
  tag?: string;
  date?: string;
  niceUrl?: string;
}

export interface EntriesPropsInterface extends RouteComponentProps<EntriesParamsInterface> {
  languageStore?: LanguageStoreInterface;
}

interface EntriesStateInterface {
  entries: EntryInterface[];
  loading: boolean;
}

export class Entries extends React.Component<EntriesPropsInterface, EntriesStateInterface> {
  constructor(props: EntriesPropsInterface) {
    super(props);
    this.state = { entries: undefined, loading: false };

    reaction(
      () => this.props.languageStore.language,
      () => {
        this.getEntries();
      },
    );
  }

  componentDidMount() {
    if (!this.state.entries) {
      this.getEntries();
    }
  }

  getEntries() {
    this.setState({ loading: true });
    AssetsProvider
      .getEntries(this.props.languageStore.getLanguage())
      .then((response: RequestHandlerResponseInterface) => {
        const entries = RequestHandler.validateResponse(response)
          ? response.data
          : undefined;
        this.setState({ entries, loading: false });
      });
  }

  render() {
    const { match: { params } } = this.props;
    const { entries, loading } = this.state;

    if (loading) {
      return (
        <LoadingCover />
      );
    }

    if (!entries) {
      return (
        <ErrorBox
          message={<Label name="errors__no_entries_in_db" />}
        />
      );
    }

    const entriesFiltered = this.filterEntries(
      prepareEntries(entries),
      params,
    );

    return (
      <div>
        {this.getMeta()}
        <EntriesList
          entries={entriesFiltered}
          fullEntry={this.isEntryFull()}
        />
      </div>
    );
  }

  getMeta(): JSX.Element {
    return <EntriesMeta/>;
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
    return !!entry.public;
  });
}

export default inject('languageStore')(Entries);
