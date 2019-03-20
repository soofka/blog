import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import theme from 'common/theme';
import { StyledLanguageSwitcher } from 'components/LanguageSwitcher/styled';

describe('<StyledLanguageSwitcher/>', () => {

  it('is styled correctly', () => {
    expect(shallow(<StyledLanguageSwitcher theme={theme} />)).toMatchSnapshot();
  });

});
