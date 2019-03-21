import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledEntryHeaderTags } from '../styled';

describe('<StyledEntryHeaderTags/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryHeaderTags theme={theme} />)).toMatchSnapshot();
  });

});
