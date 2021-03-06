import * as React from 'react';
import { shallow } from 'enzyme';

import { mockStoreProps } from 'common/testMocks';

import LanguageSwitcher from 'components/LanguageSwitcher';

describe('<LanguageSwitcher/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <LanguageSwitcher
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
