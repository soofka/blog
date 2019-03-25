import { reaction } from 'mobx';
import { inject } from 'mobx-react';
import * as React from 'react';

import {
  getEntryContent,
  RequestSuccessResponseInterface,
  scrollToEntryTop,
  validateRequestSuccessResponse,
} from 'blog/common/helpers';
import { EntryBrief } from 'blog/components/EntryBrief';
import { EntryContent } from 'blog/components/EntryContent';
import { EntryFooter } from 'blog/components/EntryFooter';
import { EntryHeader } from 'blog/components/EntryHeader';
import { ErrorBox } from 'blog/components/ErrorBox';
import { Label } from 'blog/components/Label';
import { LoadingCover } from 'blog/components/LoadingCover';
import { LanguageStoreInterface } from 'blog/store/language';
import { getEntryFilePath } from 'common/helpers';
import { EntryInterface, TagInterface } from 'common/types';
import { EntryMeta } from './meta';

import { StyledEntry } from './styled';

export interface EntryPropsInterface extends EntryInterface, React.Props<any> {
  languageStore?: LanguageStoreInterface;
}

interface EntryStateInterface {
  content: string;
  loading: boolean;
}

export class EntryContainer extends React.Component<EntryPropsInterface, EntryStateInterface> {
  constructor(props: EntryPropsInterface) {
    super(props);
    this.state = { content: undefined, loading: false };

    reaction(
      () => this.props.languageStore.language,
      () => this.getContent(),
    );
  }

  componentDidMount() {
    if (!this.state.content) {
      this.getContent();
    }
  }

  getContent() {
    this.setState({ loading: true });
    const { contentFileName, languageStore: { getLanguage } } = this.props;

    getEntryContent(getEntryFilePath(contentFileName, getLanguage()))
      .then((response: RequestSuccessResponseInterface) => {
        const content = validateRequestSuccessResponse(response)
          ? response.data
          : undefined;

        this.setState({ content, loading: false });
        scrollToEntryTop();
      });
  }

  render() {
    const { title, tags, brief, niceUrl, imageUrl, created, updated } = this.props;
    const { content, loading } = this.state;

    return (
      <StyledEntry>
        <EntryMeta
          title={title}
          description={brief}
          keywords={tags.map((tag: TagInterface) => tag.name)}
          imageUrl={imageUrl}
        />
        <EntryHeader
          title={title}
          titleLink={niceUrl}
          tags={tags}
          created={created}
          updated={updated}
        />
        {loading &&
          <LoadingCover />
        }
        {!loading && !content &&
          <ErrorBox
            message={<Label name="errors__no_entry_content" />}
          />
        }
        {!loading && content &&
          <div>
            <EntryBrief
              text={brief}
              imageUrl={imageUrl}
            />
            <EntryContent
              content={content}
            />
            <EntryFooter
              title={title}
              niceUrl={niceUrl}
            />
          </div>
        }
      </StyledEntry>
    );
  }
}

export const Entry = inject('languageStore')(EntryContainer);
