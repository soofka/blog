import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledBlog } from '../styled';

describe('<StyledBlog/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledBlog theme={theme} />)).toMatchSnapshot();
  });

});
