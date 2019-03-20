import * as React from 'react';

import ContentDivider from 'components/ContentDivider';
import ScrollTopButton from 'components/ScrollTopButton';
import EntryComments from './components/EntryComments';

interface EntryFooterPropsInterface {
  title: string;
  niceUrl: string;
  niceUrlWithBasePath: string;
}

export const EntryFooter = (props: EntryFooterPropsInterface): JSX.Element => {
  const { title, niceUrl, niceUrlWithBasePath } = props;
  return (
    <div>
      <ScrollTopButton/>
      <ContentDivider/>
      <EntryComments
        title={title}
        url={niceUrlWithBasePath}
        shortName={niceUrl}
        identifier={niceUrl}
      />
    </div>
  );
};

export default EntryFooter;
