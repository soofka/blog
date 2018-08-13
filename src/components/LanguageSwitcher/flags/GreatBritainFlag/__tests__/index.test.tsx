import * as React from 'react';
import { shallow } from 'enzyme';

import GreatBritainFlag from 'components/LanguageSwitcher/flags/GreatBritainFlag';

describe('<GreatBritainFlag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<GreatBritainFlag/>)).toMatchSnapshot();
  });

});
