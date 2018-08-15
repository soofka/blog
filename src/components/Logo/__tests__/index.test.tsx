import * as React from 'react';
import { shallow } from 'enzyme';

import Logo from 'components/Logo';

describe('<Logo/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Logo/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <Logo
        number="1"
      />,
    )).toMatchSnapshot();
  });

});
