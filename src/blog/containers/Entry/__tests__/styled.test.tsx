import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import theme from 'common/theme';
import { StyledEntry, StyledEntryContent } from 'containers/Entry/styled';

describe('<StyledEntry/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntry theme={theme} />)).toMatchSnapshot();
  });

});

describe('<StyledEntryContent/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryContent theme={theme} />)).toMatchSnapshot();
  });

});
