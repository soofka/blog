import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledLinkIconsBar } from '../styled';

describe('<StyledLinkIconsBar/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledLinkIconsBar theme={theme} />)).toMatchSnapshot();
  });

});
