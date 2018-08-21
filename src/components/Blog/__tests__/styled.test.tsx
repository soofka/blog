import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledBlog } from 'components/Blog/styled';

describe('<StyledBlog/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledBlog theme={theme} />)).toMatchSnapshot();
  });

});
