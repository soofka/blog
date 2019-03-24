import { shallow } from 'enzyme';
import * as React from 'react';

import { NotFoundError } from '../';

describe('<NotFoundError/>', () => {

  it('renders correctly', () => {
    expect(shallow(<NotFoundError/>)).toMatchSnapshot();
  });

});
