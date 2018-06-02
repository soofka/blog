import * as React from 'react';

interface EntryContentPropsInterface {
  content: string;
}

export const EntryContent = (props: EntryContentPropsInterface): JSX.Element => {
  const { content } = props;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};

export default EntryContent;
