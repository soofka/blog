import * as React from 'react';

import ErrorBox from 'components/ErrorBox';
import LabelsProvider from 'common/LabelsProvider';

interface NotFoundErrorPropsInterface {
  language: string;
}

export const NotFoundError = (props: NotFoundErrorPropsInterface): JSX.Element => {
  const { language } = props;
  return (
    <div>
      <ErrorBox
        language={language}
        message={LabelsProvider.getLabel('errors__page_not_found', language)} />
    </div>
  );
};

export default NotFoundError;
