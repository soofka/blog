import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledContentDivider } from '../styled';

describe('<StyledContentDivider/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledContentDivider theme={theme} />)).toMatchSnapshot();
  });

});
