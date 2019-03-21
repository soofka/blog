import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import { theme } from 'blog/common/theme';
import { StyledEntryHeaderMeta } from '../styled';

describe('<StyledEntryHeaderMeta/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryHeaderMeta theme={theme} />)).toMatchSnapshot();
  });

});
