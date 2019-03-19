import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledEntryHeaderTags } from 'components/EntryHeader/components/EntryHeaderTags/styled';

describe('<StyledEntryHeaderTags/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryHeaderTags theme={theme} />)).toMatchSnapshot();
  });

});
