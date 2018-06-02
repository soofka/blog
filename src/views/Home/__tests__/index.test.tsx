import * as React from 'react';
import { shallow } from 'enzyme';

import Home from 'views/Home';

describe('<Home/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Home/>)).toMatchSnapshot();
  });

});
