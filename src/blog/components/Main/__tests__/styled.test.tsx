import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import theme from 'common/theme';
import { StyledMain } from 'components/Main/styled';

describe('<StyledMain/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledMain theme={theme} />)).toMatchSnapshot();
  });

});
