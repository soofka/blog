import { reaction } from 'mobx';
import { inject } from 'mobx-react';
import * as React from 'react';

import AssetsProvider from 'common/AssetsProvider';
import RequestHandler, { RequestHandlerResponseInterface } from 'common/RequestHandler';
import RoutingProvider from 'common/RoutingProvider';
import Scroller from 'common/Scroller';

import { LanguageStoreInterface } from 'store/language';

import EntryBrief, { EntryBriefInterface } from 'components/EntryBrief';
import EntryContent from 'components/EntryContent';
import EntryFooter from 'components/EntryFooter';
import EntryHeader from 'components/EntryHeader';
import ErrorBox from 'components/ErrorBox';
import Label from 'components/Label';
import LoadingCover from 'components/LoadingCover';
import EntryMeta from 'components/Meta/components/EntryMeta';

import { StyledEntry, StyledEntryContent } from './styled';

export interface EntryInterface {
  id: string;
  title: string;
  tags: string[];
  brief: EntryBriefInterface;
  created: string;
  updated: string;
  contentFileName: string;
  public?: boolean;
}

export interface EntryPropsInterface extends EntryInterface, React.Props<any> {
  full: boolean;
  languageStore?: LanguageStoreInterface;
}

interface EntryStateInterface {
  content: string;
  loading: boolean;
}

export class Entry extends React.Component<EntryPropsInterface, EntryStateInterface> {
  constructor(props: EntryPropsInterface) {
    super(props);
    this.state = { content: undefined, loading: false };

    reaction(
      () => this.props.languageStore.language,
      () => {
        if (this.props.full) {
          this.getContent();
        }
      },
    );
  }

  componentDidMount() {
    if (this.props.full && !this.state.content) {
      this.getContent();
    }
  }

  getContent() {
    this.setState({ loading: true });
    AssetsProvider
      .getEntryContent(AssetsProvider.getEntryFilePath(this.props.languageStore.language, this.props.contentFileName))
      .then((response: RequestHandlerResponseInterface) => {

        const content = RequestHandler.validateResponse(response)
          ? response.data
          : undefined;
        this.setState({ content, loading: false });

        Scroller.scrollToEntryTop();
      });
  }

  render() {
    const { title, tags, brief, created, updated, full } = this.props;
    const { content, loading } = this.state;

    const niceUrl = RoutingProvider.parseTextToNiceUrl(title);
    const niceUrlWithBasePath = `${RoutingProvider.getEntryNiceUrlBasePath()}/${niceUrl}`;

    return (
      <StyledEntry>
        {full && <EntryMeta
          title={title}
          description={brief.text}
          keywords={tags}
          imageFileName={brief.imageFileName}
        />}
        <EntryHeader
          title={title}
          titleLink={niceUrlWithBasePath}
          tags={tags}
          created={created}
          updated={updated}
          full={full}
        />
        <StyledEntryContent>
          {!full &&
            <EntryBrief
              text={brief.text}
              imageFileName={brief.imageFileName}
              moreButtonLink={niceUrlWithBasePath}
            />}
          {full && loading &&
            <LoadingCover />}
          {full && !loading && !content &&
            <ErrorBox
              message={<Label name="errors__no_entry_content" />}
            />}
          {full && !loading && content &&
            <div>
              <EntryBrief
                text={brief.text}
                imageFileName={brief.imageFileName}
              />
              <EntryContent
                content={content}
              />
              <EntryFooter
                title={title}
                niceUrl={niceUrl}
                niceUrlWithBasePath={niceUrlWithBasePath}
              />
            </div>}
        </StyledEntryContent>
      </StyledEntry>
    );
  }
}

export default inject('languageStore')(Entry);
