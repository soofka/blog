import * as React from 'react';
import { shallow } from 'enzyme';

import { mockStoreProps } from 'common/testMocks';

import InfoSection from 'components/InfoSection';

describe('<InfoSection/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <InfoSection
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
