import { shallow } from 'enzyme';
import * as React from 'react';

import NotFoundError from 'components/NotFoundError';

describe('<NotFoundError/>', () => {

  it('renders correctly', () => {
    expect(shallow(<NotFoundError/>)).toMatchSnapshot();
  });

});
