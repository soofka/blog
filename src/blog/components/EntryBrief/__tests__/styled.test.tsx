import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledEntryImage } from '../styled';

describe('<StyledEntryImage/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryImage theme={theme} />)).toMatchSnapshot();
  });

});
