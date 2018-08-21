import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledEntryBrief } from 'components/EntryBrief/styled';

describe('<StyledEntryBrief/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryBrief theme={theme} />)).toMatchSnapshot();
  });

});
