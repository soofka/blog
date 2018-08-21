import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledLinkIconsBar } from 'components/LinkIconsBar/styled';

describe('<StyledLinkIconsBar/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledLinkIconsBar theme={theme} />)).toMatchSnapshot();
  });

});
