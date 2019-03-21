import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledEntryHeaderTitle } from '../styled';

describe('<StyledEntryHeaderTitle/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryHeaderTitle theme={theme} />)).toMatchSnapshot();
  });

});
