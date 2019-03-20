import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import theme from 'common/theme';
import { StyledQuote } from 'components/Quote/styled';

describe('<StyledQuote/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledQuote theme={theme} />)).toMatchSnapshot();
  });

});
