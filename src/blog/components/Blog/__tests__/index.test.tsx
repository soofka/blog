import * as React from 'react';
import { shallow } from 'enzyme';

import Blog from 'components/Blog';

describe('<Blog/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Blog/>)).toMatchSnapshot();
  });

});
