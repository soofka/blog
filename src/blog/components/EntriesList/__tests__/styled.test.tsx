import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledEntryListItem } from '../styled';

describe('<StyledEntryListItem/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryListItem theme={theme} />)).toMatchSnapshot();
  });

});
