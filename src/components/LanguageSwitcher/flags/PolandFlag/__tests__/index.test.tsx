import * as React from 'react';
import { shallow } from 'enzyme';

import PolandFlag from 'components/LanguageSwitcher/flags/PolandFlag';

describe('<PolandFlag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<PolandFlag/>)).toMatchSnapshot();
  });

});
