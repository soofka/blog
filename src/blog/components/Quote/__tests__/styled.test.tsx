import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledQuote } from '../styled';

describe('<StyledQuote/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledQuote theme={theme} />)).toMatchSnapshot();
  });

});
