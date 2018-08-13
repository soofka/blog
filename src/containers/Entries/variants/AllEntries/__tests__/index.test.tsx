import * as React from 'react';
import { shallow } from 'enzyme';

import AllEntries from 'containers/Entries/variants/AllEntries';

describe('<AllEntries/>', () => {

  it('renders correctly', () => {
    expect(shallow(<AllEntries/>)).toMatchSnapshot();
  });

});
