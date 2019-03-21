import { shallow } from 'enzyme';
import * as React from 'react';

import { Sidebar } from '../';

describe('<Sidebar/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Sidebar/>)).toMatchSnapshot();
  });

});
