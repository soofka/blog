import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledHeader } from 'components/Header/styled';

describe('<StyledHeader/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledHeader theme={theme} />)).toMatchSnapshot();
  });

});
