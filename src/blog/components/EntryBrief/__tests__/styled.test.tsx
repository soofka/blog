import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledEntryImage } from 'components/EntryBrief/styled';

describe('<StyledEntryImage/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryImage theme={theme} />)).toMatchSnapshot();
  });

});
