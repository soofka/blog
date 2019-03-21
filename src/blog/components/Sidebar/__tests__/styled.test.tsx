import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledSidebar, StyledSidebarHeader } from '../styled';

describe('<StyledSidebar/>', () => {

  it('has StyledSidebar styled correctly', () => {
    expect(shallow(<StyledSidebar theme={theme} />)).toMatchSnapshot();
  });

  it('has StyledSidebarHeader styled correctly', () => {
    expect(shallow(<StyledSidebarHeader theme={theme} />)).toMatchSnapshot();
  });

});
