import * as React from 'react';

import './styles.scss';

import { AssetsProvider, AssetsProviderResponse } from 'common/AssetsProvider';
import RoutingProvider from 'common/RoutingProvider';

import EntryHeader from 'components/EntryHeader';
import EntryBrief, { EntryBriefInterface } from 'components/EntryBrief';
import LoadingCover from 'components/LoadingCover';
import ErrorBox from 'components/ErrorBox';
import EntryContent from 'components/EntryContent';
import EntryComments from 'components/EntryComments';

export interface EntryInterface extends React.Props<any> {
  title: string;
  tags: string[];
  brief: EntryBriefInterface;
  created: string;
  updated: string;
  contentFileName: string;
  isPublic?: boolean;
}

interface EntryPropsInterface extends EntryInterface {
  isFull: boolean;
}

interface EntryStateInterface {
  contentResponse: AssetsProviderResponse;
}

export class Entry extends React.Component<EntryPropsInterface, EntryStateInterface> {
  constructor(props: EntryPropsInterface) {
    super(props);
    this.state = {
      contentResponse: null,
    };
  }

  componentDidMount() {
    if (this.props.isFull) {
      const entryFilePath = AssetsProvider.getEntryFilePath(this.props.contentFileName);
      AssetsProvider.getEntryContent(entryFilePath).then((response: AssetsProviderResponse) => {
        this.setState({
          contentResponse: response,
        });
      });
    }
  }

  render() {
    const { title, tags, brief, created, updated, isFull } = this.props;
    const { contentResponse } = this.state;

    const isValidResponse = contentResponse !== null;
    const isSuccessResponse = isValidResponse && contentResponse.status === 200;

    const niceUrl = RoutingProvider.parseTextToNiceUrl(title);
    const niceUrlWithBasePath = `${RoutingProvider.getEntryNiceUrlBasePath()}/${niceUrl}`;

    return (
      <div className="entry">
        <EntryHeader
          title={title}
          titleLink={niceUrlWithBasePath}
          tags={tags}
          created={created}
          updated={updated}
        />
        <div className="entry-content">
          {!isFull &&
            <EntryBrief
              text={brief.text}
              imageFileName={brief.imageFileName}
              moreButtonLink={niceUrlWithBasePath}
            />}
          {isFull && !isValidResponse &&
            <LoadingCover />}
          {isFull && isValidResponse && !isSuccessResponse &&
            <ErrorBox/>}
          {isFull && isValidResponse && isSuccessResponse &&
            <div>
              <EntryBrief
                text={brief.text}
                imageFileName={brief.imageFileName}
              />
              <EntryContent
                content={contentResponse.data}
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
