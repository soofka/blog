import * as React from 'react';
import { shallow } from 'enzyme';

import EntriesByDate from 'views/EntriesByDate';

describe('<EntriesByDate/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntriesByDate/>)).toMatchSnapshot();
  });

});
