import { reaction } from 'mobx';
import { inject } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LanguageStoreInterface } from 'blog/store/language';

import { EntriesList } from 'blog/components/EntriesList';
import { ErrorBox } from 'blog/components/ErrorBox';
import { Label } from 'blog/components/Label';
import { LoadingCover } from 'blog/components/LoadingCover';
import { HomeMeta } from './meta';

import {
  getEntries,
  RequestSuccessResponseInterface,
  validateRequestSuccessResponse,
} from 'blog/common/helpers';

import { EntryInterface } from 'common/types';

export interface HomePropsInterface extends RouteComponentProps<any> {
  languageStore?: LanguageStoreInterface;
}

interface HomeStateInterface {
  entries: EntryInterface[];
  loading: boolean;
}

export class HomeContainer extends React.Component<HomePropsInterface, HomeStateInterface> {
  constructor(props: HomePropsInterface) {
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

    return (
      <div>
        <HomeMeta />
        <EntriesList entries={filterPrivateEntries(entries)} />
      </div>
    );
  }
}

const filterPrivateEntries = (entries: EntryInterface[]): EntryInterface[] =>
  entries.filter((entry: EntryInterface) => entry.public);

export const Home = inject('languageStore')(HomeContainer);
