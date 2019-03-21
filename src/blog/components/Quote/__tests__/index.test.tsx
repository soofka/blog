import { shallow } from 'enzyme';
import * as React from 'react';

import { Quote } from '../';

describe('<Quote/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Quote/>)).toMatchSnapshot();
  });

});
