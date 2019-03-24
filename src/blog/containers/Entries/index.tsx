import { reaction } from 'mobx';
import { inject } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LanguageStoreInterface } from 'blog/store/language';

import { EntriesList } from 'blog/components/EntriesList';
import { ErrorBox } from 'blog/components/ErrorBox';
import { Label } from 'blog/components/Label';
import { LoadingCover } from 'blog/components/LoadingCover';
import { EntriesMeta } from 'blog/components/Meta/components/EntriesMeta';

import {
  getEntries,
  RequestSuccessResponseInterface,
  validateRequestSuccessResponse,
} from 'blog/common/helpers';

import { EntryInterface } from 'common/types';

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

export class EntriesContainer extends React.Component<EntriesPropsInterface, EntriesStateInterface> {
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
    getEntries(this.props.languageStore.getLanguage())
      .then((response: RequestSuccessResponseInterface) => {
        const entries = validateRequestSuccessResponse(response, true)
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

const prepareEntries = (entries: EntryInterface[]): EntryInterface[] => filterPrivateEntries(entries);

const filterPrivateEntries = (entries: EntryInterface[]): EntryInterface[] =>
  entries.filter((entry: EntryInterface) => entry.public);

export const Entries = inject('languageStore')(EntriesContainer);
