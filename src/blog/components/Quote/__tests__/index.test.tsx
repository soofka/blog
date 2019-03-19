import * as React from 'react';
import { shallow } from 'enzyme';

import Quote from 'components/Quote';

describe('<Quote/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Quote/>)).toMatchSnapshot();
  });

});
