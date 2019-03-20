import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import theme from 'common/theme';
import { StyledEntryHeaderMeta } from 'components/EntryHeader/components/EntryHeaderMeta/styled';

describe('<StyledEntryHeaderMeta/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledEntryHeaderMeta theme={theme} />)).toMatchSnapshot();
  });

});
