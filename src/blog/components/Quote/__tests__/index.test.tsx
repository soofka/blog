import { shallow } from 'enzyme';
import * as React from 'react';

import Quote from 'components/Quote';

describe('<Quote/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Quote/>)).toMatchSnapshot();
  });

});
