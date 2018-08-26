import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledContentDivider } from 'components/ContentDivider/styled';

describe('<StyledContentDivider/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledContentDivider theme={theme} />)).toMatchSnapshot();
  });

});
