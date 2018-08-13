import * as React from 'react';
import { shallow } from 'enzyme';

import NotFoundError from 'components/NotFoundError';

describe('<NotFoundError/>', () => {

  it('renders correctly', () => {
    expect(shallow(<NotFoundError/>)).toMatchSnapshot();
  });

});
