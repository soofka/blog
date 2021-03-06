import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledScrollTopButton } from 'components/ScrollTopButton/styled';

describe('<StyledScrollTopButton/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledScrollTopButton theme={theme} />)).toMatchSnapshot();
  });

});
