import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledHeader } from '../styled';

describe('<StyledHeader/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledHeader theme={theme} />)).toMatchSnapshot();
  });

});
