import { shallow } from 'enzyme';
import * as React from 'react';

import { Blog } from '../';

describe('<Blog/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Blog/>)).toMatchSnapshot();
  });

});
