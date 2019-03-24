import { reaction } from 'mobx';
import { inject } from 'mobx-react';
import * as React from 'react';
import { Redirect } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import { LanguageStoreInterface } from 'blog/store/language';

import { EntriesList } from 'blog/components/EntriesList';
import { ErrorBox } from 'blog/components/ErrorBox';
import { Label } from 'blog/components/Label';
import { LoadingCover } from 'blog/components/LoadingCover';
import { EntriesByTagMeta } from './meta';

import {
  getEntries,
  getTags,
  RequestSuccessResponseInterface,
  validateRequestSuccessResponse,
} from 'blog/common/helpers';

import { getTagBaseUrl, isIdGeneratedBasedOnCharacters, parseTextToNiceUrl } from 'common/helpers';
import { EntryInterface, TagInterface } from 'common/types';

export interface EntriesByTagParamsInterface {
  potentialId: string;
}

export interface EntriesByTagPropsInterface extends RouteComponentProps<EntriesByTagParamsInterface> {
  languageStore?: LanguageStoreInterface;
}

interface EntriesByTagStateInterface {
  entries: EntryInterface[];
  tags: TagInterface[];
  loadingEntries: boolean;
  loadingTags: boolean;
}

export class EntriesByTagContainer extends React.Component<EntriesByTagPropsInterface, EntriesByTagStateInterface> {
  constructor(props: EntriesByTagPropsInterface) {
    super(props);
    this.state = { entries: undefined, tags: undefined, loadingEntries: false, loadingTags: false };

    reaction(
      () => this.props.languageStore.language,
      () => {
        this.getEntries();
        this.getTags();
      },
    );
  }

  componentDidMount() {
    if (!this.state.entries) {
      this.getEntries();
    }
    if (!this.state.tags) {
      this.getTags();
    }
  }

  getEntries() {
    this.setState({ loadingEntries: true });
    getEntries(this.props.languageStore.getLanguage())
      .then((response: RequestSuccessResponseInterface) => {
        const entries = validateRequestSuccessResponse(response, true)
          ? response.data
          : undefined;
        this.setState({ entries, loadingEntries: false });
      });
  }

  getTags() {
    this.setState({ loadingTags: true });
    getTags(this.props.languageStore.getLanguage())
      .then((response: RequestSuccessResponseInterface) => {
        const tags = validateRequestSuccessResponse(response, true)
          ? response.data
          : undefined;
        this.setState({ tags, loadingTags: false });
      });
  }

  render() {
    const { match: { params: { potentialId } } } = this.props;
    const { entries, tags, loadingEntries, loadingTags } = this.state;

    if (loadingEntries || loadingTags) {
      return (
        <LoadingCover />
      );
    }

    if (!entries || !tags) {
      return (
        <ErrorBox
          message={<Label name="errors__no_data_in_db" />}
        />
      );
    }

    const isId = isIdGeneratedBasedOnCharacters(potentialId);
    const tag = isId
      ? tags.find((tag: TagInterface) => tag.id === potentialId)
      : tags.find((tag: TagInterface) => parseTextToNiceUrl(tag.name) === potentialId);

    return isId
      ? <Redirect to={`${getTagBaseUrl()}/${tag.name}`}/>
      : (
        <div>
          <EntriesByTagMeta tag={tag} />
          <EntriesList
            entries={filterPrivateEntries(entries)}
            fullEntry={false}
          />
        </div>
      );
  }
}

const filterPrivateEntries = (entries: EntryInterface[]): EntryInterface[] =>
  entries.filter((entry: EntryInterface) => entry.public);

export const EntriesByTag = inject('languageStore')(EntriesByTagContainer);
