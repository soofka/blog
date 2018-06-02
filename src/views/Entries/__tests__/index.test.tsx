import * as React from 'react';
import { shallow } from 'enzyme';

import Entries from 'views/Entries';

describe('<Entries/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Entries/>)).toMatchSnapshot();
  });

});
