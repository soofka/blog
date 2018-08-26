import * as React from 'react';
import { reaction } from 'mobx';
import { inject } from 'mobx-react';

import RequestHandler, { RequestHandlerResponseInterface } from 'common/RequestHandler';
import AssetsProvider from 'common/AssetsProvider';
import RoutingProvider from 'common/RoutingProvider';

import { LanguageStoreInterface } from 'store/language';

import Label from 'components/Label';
import EntryHeader from 'components/EntryHeader';
import EntryBrief, { EntryBriefInterface } from 'components/EntryBrief';
import LoadingCover from 'components/LoadingCover';
import ErrorBox from 'components/ErrorBox';
import EntryContent from 'components/EntryContent';
import EntryComments from 'components/EntryComments';
import ContentDivider from 'components/ContentDivider';

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
      .getEntryContent(AssetsProvider.getEntryFilePath(this.props.contentFileName))
      .then((response: RequestHandlerResponseInterface) => {

        const content = RequestHandler.validateResponse(response)
          ? response.data
          : undefined;
        this.setState({ content, loading: false });
      });
  }

  render() {
    const { title, tags, brief, created, updated, full } = this.props;
    const { content, loading } = this.state;

    const niceUrl = RoutingProvider.parseTextToNiceUrl(title);
    const niceUrlWithBasePath = `${RoutingProvider.getEntryNiceUrlBasePath()}/${niceUrl}`;

    return (
      <StyledEntry>
        <EntryHeader
          title={title}
          titleLink={niceUrlWithBasePath}
          tags={tags}
          created={created}
          updated={updated}
        />
        <StyledEntryContent>
          {!full &&
            <EntryBrief
              text={brief.text}
              full={false}
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
                full={true}
                imageFileName={brief.imageFileName}
              />
              <EntryContent
                content={content}
              />
              <ContentDivider/>
              <EntryComments
                title={title}
                url={niceUrlWithBasePath}
                shortName={niceUrl}
                identifier={niceUrl}
              />
            </div>}
        </StyledEntryContent>
      </StyledEntry>
    );
  }
}

export default inject('languageStore')(Entry);
