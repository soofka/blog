import * as React from 'react';
import { shallow } from 'enzyme';

import AllEntriesByTag from 'containers/Entries/variants/AllEntriesByTag';

describe('<AllEntriesByTag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<AllEntriesByTag/>)).toMatchSnapshot();
  });

});
