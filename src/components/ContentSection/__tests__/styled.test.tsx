import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledContentSection } from 'components/ContentSection/styled';

describe('<StyledContentSection/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledContentSection theme={theme} />)).toMatchSnapshot();
  });

});
