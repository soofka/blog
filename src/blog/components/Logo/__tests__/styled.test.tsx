import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import theme from 'common/theme';
import { StyledLogo } from 'components/Logo/styled';

describe('<StyledLogo/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledLogo theme={theme} />)).toMatchSnapshot();
  });

});
