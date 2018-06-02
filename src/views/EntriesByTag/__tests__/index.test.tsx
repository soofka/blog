import * as React from 'react';
import { shallow } from 'enzyme';

import EntriesByTag from 'views/EntriesByTag';

describe('<EntriesByTag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntriesByTag/>)).toMatchSnapshot();
  });

});
