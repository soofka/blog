import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledWrapper } from '../styled';

describe('<StyledWrapper/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledWrapper theme={theme} />)).toMatchSnapshot();
  });

});
