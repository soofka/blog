import * as React from 'react';

import { ContentDivider } from 'blog/components/ContentDivider';
import { ScrollTopButton } from 'blog/components/ScrollTopButton';
import { getEntryBaseUrl } from 'common/helpers';
import { EntryComments } from './components/EntryComments';


interface EntryFooterPropsInterface {
  title: string;
  niceUrl: string;
}

export const EntryFooter = (props: EntryFooterPropsInterface): JSX.Element => {
  const { title, niceUrl } = props;
  return (
    <div>
      <ScrollTopButton/>
      <ContentDivider/>
      <EntryComments
        title={title}
        url={`${getEntryBaseUrl()}${niceUrl}`}
        shortName={niceUrl}
        identifier={niceUrl}
      />
    </div>
  );
};
