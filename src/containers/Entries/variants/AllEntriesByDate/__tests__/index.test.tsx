import * as React from 'react';
import { shallow } from 'enzyme';

import AllEntriesByDate from 'containers/Entries/variants/AllEntriesByDate';

describe('<AllEntriesByDate/>', () => {

  it('renders correctly', () => {
    expect(shallow(<AllEntriesByDate/>)).toMatchSnapshot();
  });

});
