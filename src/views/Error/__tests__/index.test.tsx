import * as React from 'react';
import { shallow } from 'enzyme';

import Error from 'views/Error';

describe('<Error/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Error/>)).toMatchSnapshot();
  });

});
