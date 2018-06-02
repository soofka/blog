import * as React from 'react';
import { shallow } from 'enzyme';

import Entry from 'views/Entry';

describe('<Entry/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Entry/>)).toMatchSnapshot();
  });

});
