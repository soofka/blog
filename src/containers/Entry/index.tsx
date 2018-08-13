import * as React from 'react';

import './styles.scss';

import RequestHandler, { RequestHandlerResponseInterface } from 'common/RequestHandler';
import AssetsProvider from 'common/AssetsProvider';
import LabelsProvider from 'common/LabelsProvider';
import RoutingProvider from 'common/RoutingProvider';

import EntryHeader from 'components/EntryHeader';
import EntryBrief, { EntryBriefInterface } from 'components/EntryBrief';
import LoadingCover from 'components/LoadingCover';
import ErrorBox from 'components/ErrorBox';
import EntryContent from 'components/EntryContent';
import EntryComments from 'components/EntryComments';

export interface EntryInterface {
  id: string;
  title: string;
  tags: string[];
  brief: EntryBriefInterface;
  created: string;
  updated: string;
  contentFileName: string;
  isPublic?: boolean;
}

export interface EntryPropsInterface extends EntryInterface, React.Props<any> {
  full: boolean;
  language: string;
}

interface EntryStateInterface {
  content: string;
  loading: boolean;
}

export class Entry extends React.Component<EntryPropsInterface, EntryStateInterface> {
  constructor(props: EntryPropsInterface) {
    super(props);
    this.state = { content: undefined, loading: false };
  }

  componentDidMount() {
    if (this.props.full && !this.state.content) {
      this.getContent();
    }
  }

  componentDidUpdate(prevProps: EntryPropsInterface) {
    if (this.props.full && this.props.language !== prevProps.language) {
      this.getContent();
    }
  }

  getContent() {
    this.setState({ loading: true });
    AssetsProvider
      .getEntryContent(AssetsProvider.getEntryFilePath(this.props.contentFileName))
      .then((response: RequestHandlerResponseInterface) => {
        const content = RequestHandler.validateResponse(response) ? response.data : undefined;
        this.setState({ content, loading: false });
      });
  }

  render() {
    const { title, tags, brief, created, updated, full, language } = this.props;
    const { content, loading } = this.state;

    const niceUrl = RoutingProvider.parseTextToNiceUrl(title);
    const niceUrlWithBasePath = `${RoutingProvider.getEntryNiceUrlBasePath()}/${niceUrl}`;

    return (
      <div className="entry">
        <EntryHeader
          language={language}
          title={title}
          titleLink={niceUrlWithBasePath}
          tags={tags}
          created={created}
          updated={updated}
        />
        <div className="entry-content">
          {!full &&
            <EntryBrief
              language={language}
              text={brief.text}
              imageFileName={brief.imageFileName}
              moreButtonLink={niceUrlWithBasePath}
            />}
          {full && loading &&
            <LoadingCover />}
          {full && !content &&
            <ErrorBox
              language={language}
              message={LabelsProvider.getLabel('errors__no_entry_content', language)}
            />}
          {full && !loading && content &&
            <div>
              <EntryBrief
                language={language}
                text={brief.text}
                imageFileName={brief.imageFileName}
              />
              <EntryContent
                content={content}
              />
              <EntryComments
                title={title}
                url={niceUrlWithBasePath}
                shortName={niceUrl}
                identifier={niceUrl}
              />
            </div>}
        </div>
      </div>
    );
  }
}

export default Entry;
