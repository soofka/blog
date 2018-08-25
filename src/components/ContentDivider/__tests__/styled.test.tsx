import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledHr } from 'components/ContentDivider/styled';

describe('<StyledHr/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledHr theme={theme} />)).toMatchSnapshot();
  });

});
