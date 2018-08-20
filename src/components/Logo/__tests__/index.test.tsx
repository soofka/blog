import * as React from 'react';
import { shallow } from 'enzyme';

import Logo from 'components/Logo';
import { StyledLogo } from 'components/Logo/styled';

describe('<Logo/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <Logo
        number="1"
      />,
    )).toMatchSnapshot();
  });

  it('is styled correctly', () => {
    expect(shallow(<StyledLogo/>)).toMatchSnapshot();
  });

});
