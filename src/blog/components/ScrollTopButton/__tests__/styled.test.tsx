import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledScrollTopButton } from '../styled';

describe('<StyledScrollTopButton/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledScrollTopButton theme={theme} />)).toMatchSnapshot();
  });

});
