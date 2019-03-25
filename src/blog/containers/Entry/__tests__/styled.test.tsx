import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledEntry } from '../styled';

describe('<StyledEntry/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntry theme={theme} />)).toMatchSnapshot();
  });

});
