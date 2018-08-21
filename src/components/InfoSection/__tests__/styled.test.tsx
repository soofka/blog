import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import theme from 'common/theme';
import { StyledInfoSection } from 'components/InfoSection/styled';

describe('<StyledInfoSection/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledInfoSection theme={theme} />)).toMatchSnapshot();
  });

});
