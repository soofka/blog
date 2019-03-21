import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';

import { LanguageSwitcher } from '../';

describe('<LanguageSwitcher/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <LanguageSwitcher
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
